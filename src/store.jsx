import Reducer from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
const initialState = {};

const rootReducers = combineReducers({ nameReducer: Reducer });

const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
