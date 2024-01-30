// eslint-disable-next-line react/prop-types
const Button = ({ children, btn_style }) => {
  return <Button className={`btn ${btn_style}`}>{children}</Button>;
};

export default Button;
