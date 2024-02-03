import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CreatePlanHero from "../components/CreatePlanHero";
import HowItWorks from "../components/HowItWorks";
import FaqNav from "../components/FaqNav";
import Faq from "../components/Faq";
import "../components/CSS/CreatePlan.css";
import { useAuthContext } from "../hooks/useAuthContext";

const CreatePlan = () => {
  const { client } = useAuthContext();
  return (
    <div>
      <Header />
      <CreatePlanHero
        title={`Create a Plan, ${client}`}
        leadText={
          "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        }
        buttonText={"Create Your  Plan"}
      />
      <section className="howItWorks howitworksBG">
        <HowItWorks />
      </section>
      <div className="faqSection">
        <FaqNav />
        <Faq name={client} />
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
    </div>
  );
};

export default CreatePlan;
