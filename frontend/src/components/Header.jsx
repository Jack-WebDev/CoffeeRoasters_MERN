import {Link} from "react-router-dom"
import "./CSS/Header.css";
import ResponsiveMenu from "./ResponsiveMenu";

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
