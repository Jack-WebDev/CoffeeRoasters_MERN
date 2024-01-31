import { useState } from "react";
import orderOptions from "../components/data/orderOptions.json";
import OrderOptionCard from "./OrderOptionCard";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            className={`faq-question ${openIndex === categoryIndex ? 'open' : ''}`}
            onClick={() => handleToggle(categoryIndex)}
          >
            {orderOptions[category][0].question}
            <span>{openIndex === categoryIndex ? '▲' : '▼'}</span>

          </h2>

          {openIndex === categoryIndex && orderOptions[category].map((option) => (
            <div key={option.id}>
              <OrderOptionCard
                name={option.name}
                details={option.description}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Faq;
