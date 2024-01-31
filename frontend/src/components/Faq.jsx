import { useState } from "react";
import orderOptions from "../components/data/orderOptions.json";
import OrderOptionCard from "./OrderOptionCard";
import Button from "./Button";

// ... (previous code)

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [orderSummary, setOrderSummary] = useState({});

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionSelect = (category, option) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      [category]: option.name,
    }));
  };

  return (
    <div className="faq-container" style={{ marginBlock: "3rem" }}>
      {Object.keys(orderOptions).map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="faq-category"
          style={{ marginBlock: "1.5rem", cursor: "pointer" }}
        >
          <h2
            className={`faq-question ${
              openIndex === categoryIndex ? "open" : ""
            }`}
            onClick={() => handleToggle(categoryIndex)}
          >
            {orderOptions[category][0].question}
            <span>{openIndex === categoryIndex ? "▲" : "▼"}</span>
          </h2>

          {openIndex === categoryIndex &&
            orderOptions[category].map((option) => (
              <div className="faq_div" key={option.name}>
                <OrderOptionCard
                  name={option.name}
                  details={option.description}
                  onSelect={() => handleOptionSelect(category, option)}
                />
              </div>
            ))}
        </div>
      ))}

      {/* Display order summary */}
      <div style={{ marginTop: "1rem" }}>
        <h3>Order Summary</h3>
        <p>
          I drink my coffee as {orderSummary.preference}, with a{" "}
          {orderSummary.beanType} ground ala {orderSummary.grindOption} type
          bean. {orderSummary.quantity} sent to me {orderSummary.delivery}.
        </p>
      </div>

      <Button>Create plan!</Button>
    </div>
  );
};

export default Faq;
