import BcbLogo from "../assets/bcbLogo.png";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "indigo", color: "white" }}>
      <Box sx={{ display: "flex", border: "1", alignItems: "flex-end" }}>
        <Box>
          <img src={BcbLogo}></img>
          <h2>Total VAT & Tax Solution Center</h2>
        </Box>
        <Box
          sx={{ flexGrow: "1", display: "flex", justifyContent: "flex-end" }}
        >
          <ul className="nav-links">
            <li>
              <Typography variant="h4">
                <Link to="/home" style={{ color: "white" }}>
                  /home
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="h4">
                <Link to="/about" style={{ color: "white" }}>
                  /about
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="h4">
                <Link to="/contact" style={{ color: "white" }}>
                  /contact
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="h4">
                <Link to="/place" style={{ color: "white" }}>
                  /place
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="h4">
                <a
                  href="https://forms.gle/XMNuWpEZN54VaXDPA"
                  style={{ color: "white" }}
                >
                  /carrer
                </a>
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
      <hr />
    </nav>
  );
};

export default Navbar;
