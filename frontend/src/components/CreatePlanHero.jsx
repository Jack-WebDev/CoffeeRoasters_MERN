import Button from "../components/Button";
import "./CSS/CreatePlanHero.css";

// eslint-disable-next-line react/prop-types
const CreatePlanHero = ({ title, leadText, buttonText }) => {
  return (
    <section className="createPlanHeroSection">
      <h1>{title}</h1>
      <p>{leadText}</p>
      <Button>{buttonText}</Button>
    </section>
  );
};

export default CreatePlanHero;
