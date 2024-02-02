import {Link} from "react-router-dom"
import ResponsiveMenu from "./ResponsiveMenu";
import "./CSS/Header.css";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <img src="/shared/desktop/logo.svg" alt="logo" />
      </Link>

      <ResponsiveMenu />
    </header>
  );
};

export default Header;
