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
import HeaderListDrawer from "../components/HeaderListDrawer.jsx";
import { useEffect, useState } from "react";
import logoNegro from "../assets/Img/logo.png";
import logoBlanco from "../assets/Img/logoBlanco.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(logoBlanco);
  const headerStyle = {
    background: "transparent",
    color: "#fff",
    boxShadow: "none",
    position: "fixed",
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
        position: "fixed",
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
      title: "Inicio",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Quienes Somos",
      path: "#",
      icon: <LoginIcon />,
    },
    {
      title: "Campers",
      path: "#",
      icon: <LoginIcon />,
    },
    {
      title: "Casos de Exito",
      path: "#",
      icon: <LoginIcon />,
    },
    {
      title: "Contactenos",
      path: "contact",
      icon: <LoginIcon />,
    },
    {
      title: "Admin",
      path: "/login",
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
                  width: {xs:"100%", sm:"auto"},
                  display: {xs:"flex", md:"block"},
                  justifyContent: "end",
                  flexGrow: 1,
                  height: { xs: "60px", md: "80px" },
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
