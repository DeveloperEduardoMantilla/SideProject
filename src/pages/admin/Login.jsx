import { useState } from "react";
import { Link } from "react-router-dom";
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "500px",
            boxShadow: "-3px 5px 10px #ccc",
          }}
        >
          <Box
            sx={{
              
              width: "400px",
              padding: "30px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
                variant="standard"
              />
              <TextField
                id="standard-basic"
                variant="standard"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                sx={{ marginTop: "15px" }}
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
              <Box sx={{ display: "flex", margin: "40px 0px" }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/dashboard"
                  sx={{
                    width: "130px",
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
                    width: "130px",
                    background: "#FED641",
                    margin: "0 10px",
                    "&:hover": {
                      background: "#F9C919",
                    },
                  }}
                >
                  Registrate
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
