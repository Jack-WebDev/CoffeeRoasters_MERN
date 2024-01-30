/* eslint-disable react/prop-types */

const Hero = ({ title, leadText, buttonText }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{leadText}</p>
      {buttonText && <button>{buttonText}</button>}
    </>
  );
};

export default Hero;
