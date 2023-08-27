import { useState } from "react";

const Hoc = (WrappedComponent) => {
  let NewComponent = () => {
    let obj = {
      name: "alan",
    };
    let [likes, setLikes] = useState(0);
    return <WrappedComponent obj={obj} likes={likes} setLikes={setLikes} />;
  };
  return NewComponent;
};
export default Hoc;
