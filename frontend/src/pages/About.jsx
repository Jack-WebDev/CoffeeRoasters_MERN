import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import countries from "../components/data/countries.json";

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

      <section>
        <AboutSection
          img={"jhgj"}
          title={"Our Commitment"}
          description={
            "We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region."
          }
          styling={"row"}
        />

        <AboutSection
          img={"IMG 2"}
          title={"Uncompromising Quality"}
          description={
            "Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable."
          }
          styling={"row-reverse"}
        />
      </section>

      <section>
        <div className="countries__container">
          {countries.map((country) => (
            <div key={country.id}>
              <Card
                img={country.img}
                name={country.name}
                description={country.details}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
