import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  Paper,
  Typography,
} from "@mui/material";
import { Background, Parallax } from "react-parallax";
import BgImg from "../assets/Capture.png";
import ChairmanImg from "../assets/bcbLogoTransparent.png";
import "../index.css";

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
                sx={{
                  typography: {
                    xs: "h2",
                    md: "h1",
                  },
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                BCB Associates
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "h3",
                    md: "h2",
                  },
                  color: "white",
                }}
              >
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
              <Typography variant="button">Free Consultation</Typography>
            </Button>
          </Box>
        </Parallax>
        <section>
          <Typography
            sx={{
              textAlign: "center",
              typography: {
                md: "h2",
                xs: "h3",
              },
            }}
          >
            Services we provide:
          </Typography>
          <Box
            sx={{
              maxWidth: { md: "60%", xs: "100%" },
              mx: "auto",
            }}
          >
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    typography: {
                      md: "h3",
                      xs: "h4",
                    },
                  }}
                >
                  VAT Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                molestias.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    typography: {
                      md: "h3",
                      xs: "h4",
                    },
                  }}
                >
                  Tax Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                molestias.
              </AccordionDetails>
            </Accordion>
          </Box>
        </section>
        <br />
        <section>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  pt: "3.2rem",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      typography: {
                        md: "h3",
                        xs: "h4",
                      },
                    }}
                  >
                    Our Mission
                  </Typography>
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
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={ChairmanImg}
                  sx={{
                    height: "4.8rem",
                    width: "4.8rem",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      typography: {
                        md: "h3",
                        xs: "h4",
                      },
                    }}
                  >
                    Chairman's message
                  </Typography>
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
          <Typography
            sx={{
              typography: {
                md: "h2",
                xs: "h3",
              },
              textAlign: "center",
            }}
          >
            Reasons for choosing us:
          </Typography>
        </section>
      </main>
    </Paper>
  );
};

export default Home;
