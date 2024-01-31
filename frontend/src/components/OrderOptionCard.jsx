// eslint-disable-next-line react/prop-types
const OrderOptionCard = ({ name, details, onSelect }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={onSelect}>
      <h3>{name}</h3>
      <p>{details}</p>
    </div>
  );
};

export default OrderOptionCard;
