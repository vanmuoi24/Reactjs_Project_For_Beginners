import { combineReducers } from "redux";
import rotreducer from "./rootreducer";

const rootReducer = combineReducers({
  productredux: rotreducer,
});

export default rootReducer;
