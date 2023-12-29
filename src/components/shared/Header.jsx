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
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { NavLink } from "react-router-dom";
import HeaderListDrawer from "./HeaderListDrawer.jsx";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useEffect, useState } from "react";
import logoNegro from "../../assets/Img/logo.png";
import logoBlanco from "../../assets/Img/logoBlanco.png";

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
        boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
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
      path: "#",
      icon: <HomeIcon />,
    },
    {
      title: "Quienes Somos",
      path: "#aboutme",
      icon: <EmojiPeopleIcon />,
    },
    {
      title: "Campers",
      path: "#campers",
      icon: <PersonIcon />,
    },
    {
      title: "Casos de Exito",
      path: "#successStories",
      icon: <StarBorderIcon />,
    },
    {
      title: "Contactenos",
      path: "#contact",
      icon: <ContactsIcon />,
    },
    {
      title: "Admin",
      path: "/login",
      icon: <AdminPanelSettingsIcon />,
    },
  ];

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
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
                    onClick={handleContactClick}
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
