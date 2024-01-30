import Header from "../components/Header";
import Hero from "../components/Hero";
import coffeeData from "../components/data/coffeeTypes.json";
import "../components/CSS/Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"Great coffee made simple."}
        leadText={
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        }
        buttonText={"Create A Plan"}
      />
      <div>
        <h2>Our Collection</h2>

        <div className="desktop_render">
          {coffeeData.map((item) => (
            <div key={item.id}>
              <p>{item.img}</p>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="tablet_render">
          {coffeeData.map((item) => (
            <div className="tablet_card-container" key={item.id}>
              <p>{item.img}</p>
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile_render">
          {coffeeData.map((item) => (
            <div className="mobile_card-container" key={item.id}>
              <p>{item.img}</p>
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
