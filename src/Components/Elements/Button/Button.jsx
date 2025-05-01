const Button = (props) => {
  const { variant, children } = props;
  return <button className={`${variant}`}>{children}</button>;
};

export default Button;
