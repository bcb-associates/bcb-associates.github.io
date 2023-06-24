import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        position: "sticky",
        bottom: 0,
        backgroundColor: "indigo",
        color: "white",
      }}
    >
      <Typography variant="h6">Made by Arnab Shanta Anu</Typography>
      <span>
        <FaFacebookSquare style={{ fontSize: "32px" }} />
        <a
          style={{ color: "white" }}
          href="https://www.facebook.com/arnob.shanto.anu"
        >
          Arnob Shanto Anu
        </a>
      </span>
      <span>
        <FaGithubSquare style={{ fontSize: "32px" }} />
        <a
          style={{ color: "white" }}
          href="https://github.com/Arnab-Shanta-Anu"
        >
          Arnab Shanta Anu
        </a>
      </span>
      <span>
        <MdMail style={{ fontSize: "32px" }} />
        <a style={{ color: "white" }} href="mailto:arnabshantaanu@gmail.com">
          arnabshantaanu@gmail.com
        </a>
      </span>
    </footer>
  );
};

export default Footer;
