import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Card from "../components/Card";
import countries from "../components/data/countries.json";
import "../components/CSS/AboutSection.css";

const About = () => {
  return (
    <div>
      <Header />
      <AboutHero
        title={"About Us"}
        leadText={
          "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        }
      />

      <section>
        <div className="ourCommitment">
          <img
            className="mobile-img"
            src="/about/mobile/image-commitment.jpg"
            alt=""
          />
          <img
            className="tablet-img"
            src="/about/tablet/image-commitment.jpg"
            alt=""
          />
          <img
            className="desktop-img"
            src="/about/desktop/image-commitment.jpg"
            alt=""
          />

          <div className="commitment">
            <h2>Our Commitment</h2>
            <p>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>

        <div className="quality">
          <img
            className="mobile-img"
            src="/about/mobile/image-quality.jpg"
            alt=""
          />
          <img
            className="tablet-img"
            src="/about/tablet/image-quality.jpg"
            alt=""
          />
          <img
            className="desktop-img"
            src="/about/desktop/image-quality.jpg"
            alt=""
          />

          <div className="quality__content">
            <h2>Uncompromising Quality</h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="headquarters">
          {countries.map((country) => (
            <div className="UK" key={country.id}>
              <Card
                img={country.img}
                name={country.name}
                description={country.details}
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="about_footer">
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
      </footer>
    </div>
  );
};

export default About;
