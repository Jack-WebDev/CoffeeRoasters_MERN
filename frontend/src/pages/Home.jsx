import Header from "../components/Header";
import Hero from "../components/Hero";

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
    </div>
  );
};

export default Home;
