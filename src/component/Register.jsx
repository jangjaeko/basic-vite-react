// simple signup form component
// 1. name
// 2. birth
// 3. nation
// 4. self-introduction

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("Name");
  const [birth, setBirth] = useState("");
  const [nation, setNation] = useState("");
  const [intro, setIntro] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeNation = (e) => {
    setNation(e.target.value);
  };
  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };
  return (
    <div>
      <div>
        <input onChange={onChangeName} placeholder={"Name"} value={name} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={nation} onChange={onChangeNation}>
          <option value={""}></option>
          <option value="korea">ko</option>
          <option>us</option>
          <option value="us">us</option>
          <option value="jp">jp</option>
        </select>
      </div>
      <div>
        <textarea value={intro} onChange={onChangeIntro} />
        {intro}
      </div>
    </div>
  );
};
export default Register;
