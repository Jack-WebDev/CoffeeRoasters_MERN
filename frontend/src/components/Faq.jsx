import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import orderOptions from "../components/data/orderOptions.json";
import OrderOptionCard from "./OrderOptionCard";
import Button from "./Button";
import "../components/CSS/FAQ.css";

// eslint-disable-next-line react/prop-types
const Faq = ({ name }) => {
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
            <span>
              {openIndex === categoryIndex ? (
                <FaChevronUp color="#0e8784" />
              ) : (
                <FaChevronDown color="#0e8784" />
              )}
            </span>
          </h2>

          <div className="faq__content">
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
        </div>
      ))}

      <div className="order_summary">
        <h3>Order Summary for {name} </h3>
        <p>
          I drink my coffee as <span>{orderSummary.preference}</span>, with a{" "}
          <span>{orderSummary.beanType}</span> ground ala{" "}
          <span>{orderSummary.grindOption}</span> type bean.{" "}
          <span>{orderSummary.quantity}</span> sent to me{" "}
          <span>{orderSummary.delivery}</span>.
        </p>
      </div>
      <Button>Create plan!</Button>
    </div>
  );
};

export default Faq;
