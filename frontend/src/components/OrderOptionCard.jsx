// eslint-disable-next-line react/prop-types
const OrderOptionCard = ({ name, details }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{details}</p>
    </>
  );
};

export default OrderOptionCard;
