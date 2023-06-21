import BcbLogo from "../assets/bcbLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* holds the 2 parts */}
      <div className="flex items-end">
        {/* images and slogans */}
        <div className="basis-2/3 pl-80">
          <img className="" src={BcbLogo}></img>
          <h2 className="text-2xl">Total VAT & Tax Solution Center</h2>
        </div>
        {/* links */}
        <div className="ml-16 basis-1/3">
          <ul className="flex gap-x-2">
            <li>
              <NavLink
                to="/home"
                className="text-xl font-bold italic text-violet-500 hover:text-2xl hover:underline hover:transition-all"
              >
                /home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-xl font-bold italic text-violet-500 hover:text-2xl hover:underline hover:transition-all"
              >
                /about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-xl font-bold italic text-violet-500 hover:text-2xl hover:underline hover:transition-all"
              >
                /contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto mb-5 w-2/3 border-2 border-green-500" />
    </nav>
  );
};

export default Navbar;
