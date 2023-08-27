// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div>
//         <p>contact</p>
//       </div>
//     </>
//   );
// };
// export default Contact;
import Hoc from "../../Hoc/Hoc";
const Contact = ({ likes, setLikes, obj }) => {
  console.log(obj);
  return (
    <>
      <div className="p-5">
        <h1>
          ❤️<sup>{likes}</sup>
        </h1>
        <button
          className="btn btn-success"
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          like
        </button>
      </div>
    </>
  );
};
export default Hoc(Contact);
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Increment } from "../../redux/Action";

// const Contact = () => {
//   let dispatch = useDispatch();
//   let data = useSelector((state) => state.CounterReducer);

//   return (
//     <>
//       <div>
//         <p>{data}</p>
//         <button onClick={() => dispatch(Increment(10))}>+</button>
//       </div>
//     </>
//   );
// };
// export default Contact;
