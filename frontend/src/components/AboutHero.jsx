import "./CSS/AboutHero.css";

// eslint-disable-next-line react/prop-types
const AboutHero = ({ title, leadText }) => {
  return (
    <section className="createPlanHeroSection">
      <h1>{title}</h1>
      <p>{leadText}</p>
    </section>
  );
};

export default AboutHero;
