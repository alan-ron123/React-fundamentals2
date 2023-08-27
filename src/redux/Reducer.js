import { combineReducers } from "redux";
let CounterReducer = (state = [], Action) => {
  switch (Action.type) {
    case "ADDTOCART":
      return [...state, Action.payload];
    case "REMOVECART":
      return state.filter((a) => a.id !== Action.payload.id);
    default:
      return state;
  }
};
let RootReducer = combineReducers({ CounterReducer });
export default RootReducer;

// import { combineReducers } from "redux";
// let CounterReducer = (state = 0, Action) => {
//   switch (Action.type) {
//     case "increment":
//       return state + Action.payload;
//     case "decrement":
//       return state + Action.payload;
//     default:
//       return state;
//   }
// };
// let RootReducer = combineReducers({ CounterReducer,//extra reducer function });
// export default RootReducer;
