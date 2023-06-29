import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import BcbLogo from "../assets/bcbLogo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", flexGrow: 1, bgcolor: "rgba(33,39,191,.5)" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Box>
        <IconButton size="large" edge="start">
          <img src={BcbLogo} alt="logo" />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        variant="temporary"
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <List>
            <ListItem>
              <Typography variant="h4">
                <NavLink to="/home">/home</NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">
                <NavLink to="/about">/about</NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">
                <NavLink to="/contact">/contact</NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">
                <NavLink to="/place">/place</NavLink>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">
                <a href="https://forms.gle/XMNuWpEZN54VaXDPA">/carrer</a>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
