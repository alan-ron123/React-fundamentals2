import { legacy_createStore } from "redux";
import RootReducer from "./Reducer";
let Store = legacy_createStore(RootReducer);
export default Store;
