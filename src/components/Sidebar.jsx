import { Box, List, ListItemText, Switch } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/Inbox';
import ModeNightIcon from '@mui/icons-material/ModeNight';



import React from "react";
import { AccountBox, Home, MonochromePhotosOutlined, Pages, Person, Settings, Storefront } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box 
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={'fixed'}>

     
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <Pages/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Account Box" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <Person/>
            </ListItemIcon>
            <ListItemText primary="Person" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Store Front" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              <ModeNightIcon/>
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>

  
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
