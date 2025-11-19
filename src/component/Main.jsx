//jsx syntax
// {} inside JSX to embed JavaScript expressions
// only number, string . array can be directly rendered inside JSX
// every tag must be closed
// top level tag must be single

import "./Main.css";

const Main = () => {
  //   const number = 10;
  const user = {
    name: "jaeho",
    isLogin: false,
  };
  //   if (user.isLogin) {
  //     return <h2> Welcome, {user.name} </h2>;
  //   } else {
  //     return <h2> Please log in. </h2>;
  //   }

  return (
    // <main>
    //   <h1>
    //     {" "}
    //     The number is {number}
    //     {number % 2 === 0 ? " - Even" : " - Odd"}
    //     {[1, 2, 3]}
    //     {true}
    //   </h1>
    // </main>
    <>
      {user.isLogin ? (
        //inline style
        <div style={{ color: "blue", borderBottom: "1px solid red" }}>
          {" "}
          Welcome, {user.name}{" "}
        </div>
      ) : (
        <div className="logout"> Please log in. </div>
      )}
    </>
  );
};
export default Main;
