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
  return (
    <div className="App">
      <h1> Simple Couter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
