import {
  Typography,
  Paper,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import "../index.css";
import { Background, Parallax } from "react-parallax";
import BgImg from "../assets/Capture.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  return (
    <Paper elevation={24}>
      <main>
        <Parallax strength={600}>
          <Background>
            <img
              src={BgImg}
              alt="background image"
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                objectFit: "cover",
                filter: "blur(5px)",
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
            <Button
              size="large"
              variant="contained"
              sx={{
                alignSelf: "start",
                bgcolor: "secondary.main",
                color: "black",
              }}
              href="mailto:bcbassociate@gmail.com"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Typography>Free Consultation</Typography>
            </Button>
          </Box>
        </Parallax>
        <section>
          <Typography variant="h2" textAlign={"center"}>
            Services we provide:{" "}
          </Typography>
          <Accordion
            sx={{
              mx: "20rem",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h3">VAT Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              molestias.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              mx: "20rem",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h3">Tax Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              molestias.
            </AccordionDetails>
          </Accordion>
        </section>
        <section>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h3">Our Mission</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis iusto aut eaque earum optio distinctio consequuntur
                    corrupti quidem veniam, voluptatum rem velit fugiat odio
                    ipsum architecto id soluta commodi reprehenderit. Ipsam modi
                    ipsum officiis vitae molestias quisquam non illo?
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h3">Chairman's message</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis iusto aut eaque earum optio distinctio consequuntur
                    corrupti quidem veniam, voluptatum rem velit fugiat odio
                    ipsum architecto id soluta commodi reprehenderit. Ipsam modi
                    ipsum officiis vitae molestias quisquam non illo?
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </section>
        <section>
          <Typography variant="h2" textAlign={"center"}>
            Reasons for choosing us:
          </Typography>
        </section>
      </main>
    </Paper>
  );
};

export default Home;
