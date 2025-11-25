import "./App.css";
// import Header from "./component/Header";
// import Main from "./component/Main";
// import Footer from "./component/Footer";
// import Button from "./component/Button";
import { useState, useEffect, useRef } from "react";
// import Register from "./component/Register";
// import HookExam from "./component/HookExam";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "./component/Even";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const onClickButton = (value) => {
    setCount(count + value); //get current count and add value
  };
  // useEffect(() => {
  //   console.log("count changed:", count);
  //   console.log("input changed:", input);
  // }, [count, input]); //dependency array = deps
  // whenever count changes, run this effect

  const isMount = useRef(false);
  // Mount
  useEffect(() => {
    console.log("Mounted App Component");
  }, []);
  //Update
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update"); // runs on every render
  });

  // Unmount => even component

  return (
    <div className="App">
      <h1> Simple Couter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller setCount={setCount} onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
