// TODO: Install react-icons

import "./CSS/Header.css";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src="/vite.svg" alt="logo" />
      </div>

      <ResponsiveMenu />
    </nav>
  );
};

export default Header;
