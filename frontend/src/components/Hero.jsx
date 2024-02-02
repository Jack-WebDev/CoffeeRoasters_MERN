/* eslint-disable react/prop-types */
import Button from "../components/Button";
import './CSS/Hero.css'

const Hero = ({ title, leadText, buttonText }) => {
  return (
    <section className="heroSection">
      <h1>{title}</h1>
      <p>{leadText}</p>
      {buttonText && <Button>{buttonText}</Button>}
    </section>
  );
};

export default Hero;
