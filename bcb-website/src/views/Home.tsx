import { Typography, Paper, Box, Button } from "@mui/material";
import "../index.css";
import { Background, Parallax } from "react-parallax";
import BgImg from "../assets/Capture.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  return (
    <Paper elevation={24}>
      <main>
        <Parallax strength={500}>
          <Background>
            <img
              src={BgImg}
              alt="background image"
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                objectFit: "cover",
                filter: "blur(2px)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                zIndex: 10,
                bgcolor: "rgba(33,39,191,.5)",
              }}
            ></Box>
          </Background>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              justifyContent: "center",
              ml: "2.6rem",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                BCB Associates
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                Total VAT and Tax solution
              </Typography>
            </Box>
            <Button size="large" variant="contained" sx={{ width: "20rem" }}>
              <Typography>
                Free Consutation <ArrowForwardIosIcon />
              </Typography>
            </Button>
          </Box>
        </Parallax>
      </main>
    </Paper>
  );
};

export default Home;
