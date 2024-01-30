import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"About Us"}
        leadText={
          "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        }
      />

      <Footer/>
    </div>
  );
};

export default About;
