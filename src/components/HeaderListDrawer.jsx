/* eslint-disable react/prop-types */

import {
  Box,
  List,
  //   Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavbarListDrawer({ navLinks, NavLink, setOpen }) {
  return (
    <>
      <Box sx={{ width: 250 }}>
        {/* <nav>
          <list>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </list>
        </nav> 
        <Divider />*/}
        <nav>
          <List>
            {navLinks.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
              >
                
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={()=>setOpen(false)}
                >
                <ListItemIcon>
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
