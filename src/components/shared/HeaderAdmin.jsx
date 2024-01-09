import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import HeaderListDrawer from "./HeaderListDrawerAdmin.jsx";
import { useEffect, useState } from "react";
import logoNegro from "../../assets/Img/logo.png";
import logoBlanco from "../../assets/Img/logoBlanco.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(logoBlanco);
  const headerStyle = {
    background: "#2A4B9B",
    color: "#fff",
    boxShadow: "none",
    position: "relative",
    transition: "all ease-in-out .5s",
  };
  const [styleHeader, setStyleHeader] = useState(headerStyle);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > 20) {
      setLogo(logoNegro);
      setStyleHeader({
        color: "#333",
        background: "#fff",
        boxShadow: "20px 2px 5px #515A5A",
        fontWeight: "600",
        transition: "all ease-in-out .5s",
      });
    } else if (currentPosition > 0) {
      setLogo(logoBlanco);
      setStyleHeader(headerStyle);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navLinks = [
    {
      title: "Dashboard",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Perfil",
      path: "#",
      icon: <LoginIcon />,
    },
    {
      title: "Salir",
      path: "/",
      icon: <LoginIcon />,
    },
  ];
  return (
    <>
      <Box>
        <AppBar style={styleHeader}>
          <Container>
            <Toolbar>
              <IconButton
                color="inherit"
                size="large"
                onClick={() => setOpen(true)}
                sx={{ display: { sm: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  flexGrow: 1,
                  height: { xs: "70px", md: "80px" },
                }}
              >
                <img
                  src={logo}
                  alt="Logo de la Empresa"
                  style={{ height: "100%", width: "auto" }}
                />
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {navLinks.map((item) => (
                  <Button
                    color="inherit"
                    key={item.title}
                    component={NavLink}
                    onClick={async () => {
                      if (item.title == "Salir") {
                        const token = JSON.parse(localStorage.getItem("token"));
                          localStorage.removeItem("token")
                          try {
                            const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
                            let option = {
                              method: "DELETE",
                              headers: new Headers({
                                "Content-Type": "application/json",
                                Authorization: token,
                              }),
                            };
                            const eliminarToken = await (
                              await fetch(`http://${sever.host}:${sever.port}/usuario/token/${token}`, option)
                            ).json();
                            if(eliminarToken.status == 200){
                              console.log("Log out");
                            }
                          } catch (error) {
                            alert(error.message)
                          }
                      }
                    }}
                    to={item.path}
                    sx={{
                      borderRadius: "0px",
                      borderBottom: "0px solid gray",
                      fontWeight: "400",
                      fontSize: "16px",
                      textTransform: "capitalize",
                      letterSpacing: "0px",
                      "&:hover": {
                        borderBottom: "2px solid #ECA401",
                        background: "transparent",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sm: "flex", md: "none" } }}
      >
        <HeaderListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
