// simple signup form component
// 1. name
// 2. birth
// 3. nation
// 4. self-introduction

import { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    birth: "",
    nation: "",
    intro: "",
  });

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value, // dynamic key name (property name)
    });
  };

  //   const onChangeName = (e) => {
  //     setUserInfo({
  //       ...userInfo,
  //       name: e.target.value,
  //     });
  //   };

  return (
    <div>
      <div>
        <input
          name="name"
          onChange={onChange}
          placeholder={"Name"}
          value={userInfo.name}
        />
      </div>
      <div>
        <input
          name="birth"
          value={userInfo.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="nation" value={userInfo.nation} onChange={onChange}>
          <option value={""}></option>
          <option value="korea">ko</option>
          <option>us</option>
          <option value="us">us</option>
          <option value="jp">jp</option>
        </select>
      </div>
      <div>
        <textarea name="intro" value={userInfo.intro} onChange={onChange} />
      </div>
    </div>
  );
};
export default Register;
