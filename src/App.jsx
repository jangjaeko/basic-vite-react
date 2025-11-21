import "./App.css";
// import Header from "./component/Header";
// import Main from "./component/Main";
// import Footer from "./component/Footer";
// import Button from "./component/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");

  return (
    <>
      <div>
        <h1> The light is {light} </h1>
        <button
          onClick={() => {
            setLight(light === "on" ? "off" : "on");
            // light = light === "on" ? "off" : "on"; => no re-render
          }}
        >
          {light === "on" ? "Turn off" : "Turn on"}
        </button>
      </div>
      <h1> {count}</h1>
      {/* when click event re-render */}
      <button onClick={() => setCount(count + 1)}> Increase </button>
      <button onClick={() => setCount(count - 1)}> Decrease </button>
    </>
  );
}

export default App;
