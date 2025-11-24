const Controller = ({ setCount, onClickButton }) => {
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>-1</button>
      <button onClick={() => setCount((count) => count - 10)}>-10</button>
      <button onClick={() => setCount((count) => count - 100)}>-100</button>
      <button onClick={() => setCount((count) => count + 100)}>+100</button>
      <button onClick={() => onClickButton(10)}>+10</button>
      <button onClick={() => onClickButton(1)}>+1</button>
    </div>
  );
};

export default Controller;
