import { useState } from "react";

const Bulb = () => {
  //if parent component re-render, child component also re-render
  const [light, setLight] = useState("off");

  return (
    <div>
      <h1>
        {light === "on" ? (
          <h1 style={{ color: "yellow" }}>on</h1>
        ) : (
          <h1 style={{ color: "blue" }}> off</h1>
        )}{" "}
      </h1>
      <button
        onClick={() => {
          setLight(light === "on" ? "off" : "on");
          // light = light === "on" ? "off" : "on"; => no re-render
        }}
      >
        {light === "on" ? "Turn off" : "Turn on"}
      </button>
    </div>
  );
};

export default Bulb;
