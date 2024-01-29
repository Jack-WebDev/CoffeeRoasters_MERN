// TODO: Install react-icons

import "./CSS/Header.css";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    

  return (
    <nav className="navBar">
      <div className="logo">
        <img src="/vite.svg" alt="logo" />
      </div>
      
      <HamburgerMenu/>

    </nav>
  );
};

export default Header;
