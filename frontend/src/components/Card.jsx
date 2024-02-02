/* eslint-disable react/prop-types */

const Card = ({ img, name, description }) => {
  return (
    <div className="desktop_card">
      <img src={img} alt={img} />

      <div className="card__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
