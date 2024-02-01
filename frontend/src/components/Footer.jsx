import { Link } from "react-router-dom";
import "./CSS/Footer.css";
const Footer = () => {
  return (
    <nav className="footer_nav">
      <Link className="logo" to={"/"}>
        <img src="/vite.svg" alt="logo" />
      </Link>

      <ul className="footer__menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/createPlan"}>Create Plan</Link>
        </li>
      </ul>

      <ul className="social_links">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </nav>
  );
};

export default Footer;
