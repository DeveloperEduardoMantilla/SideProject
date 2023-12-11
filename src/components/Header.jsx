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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [styleHeader, setStyleHeader] = useState({
    background: "transparent",
    color: "white",
    boxShadow: "none",
    position: "relative",
    transition: "all ease-in-out .5s",
  });

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > 200) {
      setStyleHeader({
        background: "#fff",
        color: "black",
        boxShadow: "20px 2px 5px #515A5A",
        position: "fixed",
        transition: "all ease-in-out .5s",
      });
    } else {
      setStyleHeader({
        background: "transparent",
        color: "white",
        position: "relative",
        transition: "all ease-in-out .5s",
        boxShadow: "none",
      });
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
      path: "#contact",
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
                  flexGrow: 1,
                  fontWeight: "800",
                  letterSpacing: "-1px",
                  background: "-webkit-linear-gradient(#000087, #2CAAFF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                CampusLands Cv
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
                      color: "black",
                      borderBottom: "0px solid gray",
                      fontWeight: "400",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      letterSpacing: "1px",
                      "&:hover": {
                        borderBottom: "2px solid gray",
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
