import howItWorks from "../components/data/howItWorks.json";
import Button from "./Button";
import "./CSS/HowItWorks.css"

const HowItWorks = () => {
  return (
    <div className="planCreationProcess">
      {howItWorks.map((how) => (
        <div className="process__card" key={how.id}>
          <span>{how.number}</span>
          <h3>{how.name}</h3>
          <p>{how.description}</p>
        </div>
      ))}

      <Button>Create Your Plan</Button>
    </div>
  );
};

export default HowItWorks;
