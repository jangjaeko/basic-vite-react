const Button = ({ children, text, color = "black" }) => {
  // sytax event handler for cross browsing
  const onClickHandler = (e) => {
    console.log(text);
    console.log(e);
  };
  return (
    <>
      <button
        className="logout"
        style={{ color: color }}
        onClick={onClickHandler}
        // onMouseEnter={onClickHandler}
      >
        {text}
        {children}
      </button>
    </>
  );
};
export default Button;
