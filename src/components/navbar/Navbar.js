import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
  <nav className="header--navigation">
    <Link to="/">About Us</Link>
    <Link to="/edible">Edible</Link>
    <Link to="/not-edible">Not Edible</Link>
  </nav>
);

export default Navbar;