import "./App.css";
// import Header from "./component/Header";
// import Main from "./component/Main";
// import Footer from "./component/Footer";
// import Button from "./component/Button";
import { useState } from "react";
// import Register from "./component/Register";
// import HookExam from "./component/HookExam";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value); //get current count and add value
  };

  return (
    <div className="App">
      <h1> Simple Couter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller setCount={setCount} onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
