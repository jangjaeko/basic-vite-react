import { use, useEffect } from "react";

const Even = () => {
  useEffect(() => {
    //cleanup function
    return () => {
      console.log("Even Component Unmounted");
    };
  }, []);
  return <div> Even Component </div>;
};
export default Even;
