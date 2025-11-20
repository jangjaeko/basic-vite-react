import "./App.css";
import Header from "./component/Header";
// import Main from "./component/Main";
// import Footer from "./component/Footer";
import Button from "./component/Button";

function App() {
  const buttonProps = {
    text: "Click Me",
    color: "red",
    a: 1,
    b: 2,
  };

  return (
    <>
      <Button text={"mail"} color={"blue"} />
      <Button {...buttonProps} />
      <Button text={"click"}>
        <Header />
        <div> children</div>
      </Button>
    </>
  );
}

export default App;
