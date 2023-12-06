import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from "react-router-dom";
import HeaderListDrawer from "../components/HeaderListDrawer.jsx";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      title: "Inicio",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Login",
      path: "/login",
      icon: <LoginIcon />,
    }
  ];
  return (
    <>
      <Box>
        <AppBar position="static">
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
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              CampusLandsCv
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component={NavLink}
                  to={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
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
