import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import photo from "../../assets/Img/Astronauta_registrar.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [requiredFields, setRequiredFields] = useState([
    "usuario",
    "password",
    "genero",
    "telefono",
    "correo",
    "ciudad",
  ]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
    genero: "",
    telefono: "",
    correo: "",
    ciudad: "",
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
      } else if (field === "correo") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field])) {
          newErrors[field] =
            "Por favor, ingrese una dirección de correo electrónico válida.";
        }
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(formData),
    };
    try {
      const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const response = await (
        await fetch(`http://${sever.host}:${sever.port}/usuario`, options)
      ).json();

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.message,
          position: "bottom-end",
          width: "20rem",
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: response.message,
          position: "bottom-end",
          width: "20rem",
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      alert(error.message);
    }

    setFormData({
      usuario: "",
      password: "",
      genero: "",
      telefono: "",
      correo: "",
      ciudad: "",
    });
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              background: "#2A4B9B",
              alignItems: "center",
              minHeight: "500px",
              boxShadow: { xs: "-3px 5px 10px #ccc" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "300px" },
                height: { xs: "200px", sm: "100%" },

                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <img
                src={photo}
                alt=""
                style={{ width: "250px", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                maxWidth: "600px",
                padding: { xs: "20px 30px", sm: "30px 60px" },
                display: "flex",
                background: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#34495E",
                  fontSize: "34px",
                }}
              >
                Registro Campus Lands
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "justify",
                  fontWeight: "400",
                  fontSize: "13px",
                  margin: { xs: "10px 0", md: "20px 0" },
                  color: "#333",
                }}
              >
                ¡Inspira tu futuro y forma parte de nuestra comunidad de
                talentosos estudiantes! Registra tu CV y abre las puertas a
                increíbles oportunidades profesionales. Tu viaje hacia el éxito
                comienza aquí.
              </Typography>
              <Typography color="red" sx={{width:"100%", textAlign:"start", fontWeight:"600"}}>
                Importante
              </Typography>
              <Typography
                variant="caption"
                color="#34495E"
                sx={{marginBottom:"10px"}}
              >
                La contraseña debe tener al menos 8 caracteres e incluir
                símbolos y números.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      id="usuario"
                      name="usuario"
                      label="Usuario"
                      size="small"
                      sx={{ marginBottom: "10px", width: "100%" }}
                      variant="standard"
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      id="password"
                      name="password"
                      size="small"
                      sx={{ marginBottom: "10px", width: "100%" }}
                      variant="standard"
                      label="Contraseña"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={formData.password}
                      onChange={handleChange}
                    />

                    {errors.password && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.password}
                      </Typography>
                    )}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <FormControl
                      fullWidth
                      sx={{ marginTop: "15px" }}
                    >
                      <InputLabel id="genero-label">Género</InputLabel>
                      <Select
                        labelId="genero-label"
                        id="genero"
                        name="genero"
                        value={formData.genero}
                        size="small"
                        label="Género"
                        onChange={handleChange}
                      >
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="femenino">Femenino</MenuItem>
                        <MenuItem value="otro">Otro</MenuItem>
                      </Select>
                      {errors.genero && (
                        <Typography
                          variant="caption"
                          color="error"
                        >
                          {errors.genero}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      id="telefono"
                      name="telefono"
                      label="Teléfono"
                      variant="standard"
                      size="small"
                      sx={{ marginBottom: "10px", width: "100%" }}
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                    {errors.telefono && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.telefono}
                      </Typography>
                    )}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      id="correo"
                      name="correo"
                      label="Correo"
                      variant="standard"
                      size="small"
                      sx={{ marginBottom: "10px", width: "100%" }}
                      value={formData.correo}
                      onChange={handleChange}
                    />
                    {errors.correo && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.correo}
                      </Typography>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      id="ciudad"
                      name="ciudad"
                      label="Ciudad"
                      variant="standard"
                      sx={{ marginBottom: "10px", width: "100%" }}
                      value={formData.ciudad}
                      onChange={handleChange}
                    />
                    {errors.ciudad && (
                      <Typography
                        variant="caption"
                        color="error"
                      >
                        {errors.ciudad}
                      </Typography>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        margin: "40px 0px",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                          width: { xs: "100%", sm: "130px" },
                          textTransform: "capitalize",
                          background: "#2A4B9B",
                          margin: "0 10px",
                          "&:hover": {
                            background: "#2A4B9B",
                          },
                        }}
                      >
                        Go For It
                      </Button>
                      <Button
                        variant="contained"
                        component={Link}
                        to="/login"
                        sx={{
                          width: { xs: "100%", sm: "130px" },

                          background: "#F4D03F",
                          textTransform: "capitalize",
                          margin: { xs: "10px", sm: "0 10px" },
                          "&:hover": {
                            background: "#F4D03F",
                          },
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        variant="contained"
                        component={Link}
                        to="/"
                        sx={{
                          width: { xs: "100%", sm: "130px" },
                          background: "#2A4B9B",
                          textTransform: "capitalize",
                          margin: "0 10px",
                          "&:hover": {
                            background: "#2A4B9B",
                          },
                        }}
                      >
                        Inicio
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
