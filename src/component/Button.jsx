const Button = ({ children, text, color = "black" }) => {
  return (
    <>
      <button className="logout" style={{ color: color }}>
        {text}
        {children}
      </button>
    </>
  );
};
export default Button;
