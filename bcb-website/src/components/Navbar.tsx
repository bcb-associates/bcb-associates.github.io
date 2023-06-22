import BcbLogo from "../assets/bcbLogo.png";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <nav>
        <Box sx={{ display: "flex", border: "1", alignItems: "flex-end" }}>
          <Box>
            <img src={BcbLogo}></img>
            <h2>Total VAT & Tax Solution Center</h2>
          </Box>
          <Box
            sx={{ flexGrow: "1", display: "flex", justifyContent: "flex-end" }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "1em",
                alignContent: "flex-end",
                border: "1",
              }}
            >
              <li>
                <Typography variant="h4">
                  <Link to="/home">/home</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h4">
                  <Link to="/about">/about</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h4">
                  <Link to="/contact">/contact</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h4">
                  <Link to="/place">/place</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h4">
                  <a href="https://forms.gle/XMNuWpEZN54VaXDPA">/carrer</a>
                </Typography>
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
