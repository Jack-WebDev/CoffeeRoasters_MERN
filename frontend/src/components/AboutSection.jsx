/* eslint-disable react/prop-types */

const AboutSection = ({ img, title, description, styling }) => {
  return (
    <div className={styling}>
      <p>IMG{img}</p>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutSection;
