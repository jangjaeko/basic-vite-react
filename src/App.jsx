import "./App.css";
// import Header from "./component/Header";
// import Main from "./component/Main";
// import Footer from "./component/Footer";
// import Button from "./component/Button";
import { useState } from "react";
import Bulb from "./component/Bulb";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
