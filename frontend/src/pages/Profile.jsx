import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import UpdateProfileForm from "../components/UpdateProfileForm";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="form__container">
        <UpdateProfileForm />
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
          <li>
            <Link className="nav__link" to={"/createPlan"}>
              Create Plan
            </Link>
          </li>
        </ul>

        <div className="social__links">
          <FaFacebook fontSize={"2rem"} color="white" />
          <FaInstagram fontSize={"2rem"} color="white" />
          <FaTwitter fontSize={"2rem"} color="white" />
        </div>
      </footer>{" "}
    </>
  );
};

export default Profile;
