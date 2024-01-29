import { Link } from "react-router-dom";
import { useState } from "react";
import navItems from "./NavItems.js";
import "./CSS/HamburgerMenu.css";
import "./CSS/Header.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
          {navItems.map((navItem) => (
            <li key={navItem.title}>
                {navItem.icon}
              <Link className="nav__link" to={navItem.path}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HamburgerMenu;
