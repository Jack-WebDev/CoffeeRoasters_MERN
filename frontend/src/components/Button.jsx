import "./CSS/Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
