import { useState } from "react";
import { FaChevronUp, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import orderOptions from "../components/data/orderOptions.json";
import OrderOptionCard from "./OrderOptionCard";
import "../components/CSS/FAQ.css";
import SummaryModal from "./SummaryModal";

// eslint-disable-next-line react/prop-types
const Faq = ({ name }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [orderSummary, setOrderSummary] = useState({});
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  // const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  // const openSecondModal = () => {
  //   setIsFirstModalOpen(false);
  //   setIsSecondModalOpen(true);
  // };

  // const closeSecondModal = () => {
  //   setIsSecondModalOpen(false);
  // };

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
      <button className="createPlan__btn" onClick={openFirstModal}>
        Create plan!
      </button>

      <div>
        <SummaryModal openModal={isFirstModalOpen} closeModal={closeFirstModal}>
          <FaCheckCircle />

          <h3>
            Thanks for your support {name}, we have received your order and
            shipment will begin according to your specs. Enjoy!{" "}
          </h3>
        </SummaryModal>
      </div>
    </div>
  );
};

export default Faq;
