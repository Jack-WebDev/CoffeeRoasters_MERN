import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./CSS/ResponsiveMenu.css";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
        <li className="nav__item">
          <Link className="nav__link" to={"/"}>Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/about"}>About Us</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/login"}>Login</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/register"}>Register</Link>
        </li>
        {/* <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/createPlan"}>Create Plan</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default ResponsiveMenu;
