import Header from "../components/Header";
import Hero from "../components/Hero";
import coffeeData from "../components/data/coffeeTypes.json";
import benefits from "../components/data/benefits.json";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HowItWorks from "../components/HowItWorks";
import "../components/CSS/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"Great coffee made simple."}
        leadText={
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        }
        buttonText={"Create Your Plan"}
      />
      <section className="collectionsSection">
        <h2>Our Collection</h2>

        <div className="desktop_render">
          {coffeeData.map((item) => (
            <div key={item.id}>
              <Card
                img={item.img}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>

        <div className="tablet_render">
          {coffeeData.map((item) => (
            <div className="tablet_card-container" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="card__content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile_render">
          {coffeeData.map((item) => (
            <div className="mobile_card-container" key={item.id}>
              <Card
                img={item.img}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="whyUs">
        <h2>Why Choose Us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <div className="cards">
          {benefits.map((benefit) => (
            <div className="card_options" key={benefit.id}>
              <Card
                img={benefit.img}
                name={benefit.name}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="howItWorksMain__container">
          <h3>How It Works</h3>

          <HowItWorks />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
