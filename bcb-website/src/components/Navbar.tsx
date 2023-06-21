import BcbLogo from "../assets/bcbLogo.png";
import { NavLink } from "react-router-dom";
import { Container, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <nav>
        <Box sx={{ display: "flex", border: "1" }}>
          <Box>
            <img src={BcbLogo}></img>
            <h2>Total VAT & Tax Solution Center</h2>
          </Box>
          <Box sx={{ flexGrow: "1" }}>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "1em",
                alignItems: "flex-end",
              }}
            >
              <li>
                <NavLink to="/home">/home</NavLink>
              </li>
              <li>
                <NavLink to="/about">/about</NavLink>
              </li>
              <li>
                <NavLink to="/contact">/contact</NavLink>
              </li>
            </ul>
          </Box>
        </Box>
      </nav>
      <hr />
    </Container>
  );
};

export default Navbar;
