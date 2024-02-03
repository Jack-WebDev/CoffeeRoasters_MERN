import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./CSS/Footer.css";
const Footer = () => {
  return (
    <footer className="home__footer">
      <Link className="logo" to={"/"}>
        <img src="/shared/desktop/footer-logo.svg" alt="logo" />
      </Link>

      <ul className="footer__nav">
        <li>
          <Link className="nav__link" to={"/"}>HOME</Link>
        </li>
        <li>
          <Link className="nav__link" to={"/about"}>ABOUT</Link>
        </li>
      </ul>

      <div className="social__links">
        <FaFacebook fontSize={"2rem"} color="white"/>
        <FaInstagram fontSize={"2rem"} color="white"/>
        <FaTwitter fontSize={"2rem"} color="white"/>
      </div>
    </footer>
  );
};

export default Footer;
