/* eslint-disable react/prop-types */

const Card = ({ img, name, description }) => {
  return (
    <>
      <p>{img}</p>
      <h2>{name}</h2>
      <p>{description}</p>
    </>
  );
};

export default Card;
