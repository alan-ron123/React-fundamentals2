// function Increment(data) {
//   return {
//     type: "increment",
//     payload: data,
//   };
// }
// export { Increment };
let AddToCart = (data) => {
  return {
    type: "ADDTOCART",
    payload: data,
  };
};
let RemoveFromCart = (data) => {
  return {
    type: "REMOVECART",
    payload: data,
  };
};
export { AddToCart, RemoveFromCart };
