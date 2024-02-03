import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import "../components/CSS/Register.css";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="form__container">
        <RegisterForm />
      </div>

      <footer>
        <Link className="logo" to={"/"}>
          <img src="/shared/desktop/footer-logo.svg" alt="logo" />
        </Link>

        <ul className="footer__nav">
          <li>
            <Link className="nav__link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/about"}>
              About
            </Link>
          </li>
        </ul>

        <div className="social__links">
          <FaFacebook fontSize={"2rem"} color="white" />
          <FaInstagram fontSize={"2rem"} color="white" />
          <FaTwitter fontSize={"2rem"} color="white" />
        </div>
      </footer>
    </div>
  );
};

export default Register;
