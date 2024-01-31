
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"
import FaqNav from "../components/FaqNav"
import Faq from "../components/FAQ"

const CreatePlan = () => {
  return (
    <div>
      <Header/>
      <Hero title={"Create a plan"} leadText={"Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."} />
      <Footer/>

      <div>
        <HowItWorks/>
      </div>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row-reverse"}}>
      <Faq/>
      <FaqNav/>
      </div>

    </div>
  )
}

export default CreatePlan