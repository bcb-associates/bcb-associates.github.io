import BcbLogo from "../assets/bcbLogo.png";
import { Link } from "react-router-dom";

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
              <Link
                to="/companies"
                className="text-xl font-bold italic text-violet-500 hover:text-2xl hover:underline hover:transition-all"
              >
                /companies
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-xl font-bold italic text-violet-500 hover:text-2xl hover:underline hover:transition-all"
              >
                /dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto mb-5 w-2/3 border-2 border-green-500" />
    </nav>
  );
};

export default Navbar;
