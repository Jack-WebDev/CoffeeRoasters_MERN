import {Link} from "react-router-dom"
import "./CSS/Header.css";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  return (
    <nav className="navBar">
      <Link className="logo" to={"/"}>
        <img src="/vite.svg" alt="logo" />
      </Link>

      <ResponsiveMenu />
    </nav>
  );
};

export default Header;
