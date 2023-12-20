/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavbarListDrawer({ navLinks, NavLink, setOpen }) {
  return (
    <>
      <Box sx={{ width: 250, background:"#34495E", height:"100vh", display:"flex", alignItems:"center", color:"#fff" }}>
        <nav>
          <List>
            {navLinks.map((item) => (
              <ListItem 
                sx={{textAlign:"center"}}
                disablePadding
                key={item.title}
              >
                
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={()=>setOpen(false)}
                >
                <ListItemIcon sx={{color:"#fff"}}>
                    {item.icon}
                </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
}
