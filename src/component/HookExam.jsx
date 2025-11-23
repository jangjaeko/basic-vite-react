// 3 things about Hook
// 1. hook must be called in React function component or custom hook
// 2. hook must be called at the top level (not inside condition, loop, nested function)
// 3. we can make cumstom hook that starts with 'use'

import { useState } from "react";
import useInput from "../hooks/useInput";
// // const [state, setState] = useState(initialState); => err

// function useInput() {
//   const [input, setInput] = useState("");
//   const onChange = (e) => {
//     setInput(e.target.value);
//   };
//   return [input, onChange];
// }

const HookExam = () => {
  const [input, setInput] = useInput();
  const [input2, setInput2] = useInput();

  return (
    <div>
      <input value={input} onChange={setInput} />
      <br />
      <input value={input2} onChange={setInput2} />
      <h3> {input} </h3>
      <h3> {input2} </h3>
    </div>
  );
};
export default HookExam;
