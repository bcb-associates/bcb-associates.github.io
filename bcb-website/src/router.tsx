import { Container } from "@mui/material";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Place from "./views/Place";
import Footer from "./components/Footer";

const NavbarWrapper = () => {
  return (
    <div>
      <Container fixed maxWidth="xl">
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/place",
        element: <Place />,
      },
    ],
  },
]);
export default router;
