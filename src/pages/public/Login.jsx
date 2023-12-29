import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import photo from "../../assets/Img/Astronauta.png";
import useLogin from "../../hooks/useLogin.js";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {getDataToken} = useLogin();

  const [requiredFields, setRequiredFields] = useState([
    "usuario",
    "password"
  ]);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    usuario: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    let options = {
      method: "POST",
      headers: new Headers({
          "Content-Type": "application/json"
      }),
      body: JSON.stringify(formData)
    }
      const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
      const response = await (await fetch(`http://${sever.host}:${sever.port}/login`, options)).json();

      if(response.status === 200){
        localStorage.setItem("token", JSON.stringify(response.token))
        getDataToken();
      } else{
        Swal.fire({
          icon: 'error',
          title: response.message,
          position: 'bottom-end',
          width: '20rem',
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      }

    setFormData({
      usuario: "",
      password: "",
    });
   
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:{xs:"#2A4B9B",md:"#fff"}
        }}
      >
        <Box
          sx={{
            display: "flex",
            minHeight: "500px",
            justifyContent:"center",
            flexWrap:"wrap",
            boxShadow: {xs:"none", md:"-3px 5px 10px #ccc"},
            background:"#2A4B9B"
          }}
        >
          <Box
            sx={{
              width: {xs:"80%", md:"400px"},
              padding: "30px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background:"#fff"
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: "700", color: "#34495E" }}
            >
              Bienvendios
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "400",
                fontSize: "16px",
                margin: "20px 0",
                color: "#333",
              }}
            >
              Panel administrador de CampusLands
            </Typography>
            <form>
              <TextField
                id="standard-basic"
                label="Usuario"
                name="usuario"
                variant="standard"
                fullWidth
                value={formData.usuario}
                onChange={handleChange}
              />
              {errors.usuario && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.usuario}
                      </Typography>
                )}
              <TextField
                id="standard-basic"
                variant="standard"
                fullWidth
                label="Contraseña"
                name="password"
                type={showPassword ? "text" : "password"}
                sx={{ marginTop: "15px" }}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
               {errors.password && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.password}
                      </Typography>
                    )}
              <Box sx={{ display: "flex", justifyContent:"space-between", flexWrap:"wrap", margin: "40px 0px" }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  // component={Link}
                  // to="/dashboard"
                  sx={{
                    width: "40%",
                    background: "#2A4B9B",
                    margin: "0 10px",
                    "&:hover": {
                      background: "#1F3874",
                    },
                  }}
                >
                  Go For It
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/registred"
                  sx={{
                    width: "40%",
                    background: "#FED641",
                    margin: "0 10px",
                    "&:hover": {
                      background: "#F9C919",
                    },
                  }}
                >
                  Registrate
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/"
                  sx={{
                    width: "100%",
                    background: "#371A46",
                    margin: "10px",
                    "&:hover": {
                      background: "#371A46",
                    },
                  }}
                >
                  Volver
                </Button>
              </Box>
            </form> 
          </Box>
          <Box
            sx={{
              width: "450px",
              height: "100%",
              background: "#2A4B9B",
              position: "relative",
              transition: "transform 0.3s ease-in-out",
              overflow:"hidden"
            }}
          >
            <img
              src={photo}
              alt=""
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
