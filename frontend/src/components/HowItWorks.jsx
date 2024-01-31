import howItWorks from "../components/data/howItWorks.json";
import Card from "./Card";
import Button from "./Button";

const HowItWorks = () => {
  return (
    <>
      {howItWorks.map((how) => (
        <div key={how.id}>
          <Card
            img={how.number}
            name={how.name}
            description={how.description}
          />
        </div>
      ))}

      <Button />
    </>
  );
};

export default HowItWorks;
