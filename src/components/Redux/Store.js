import { combineReducers, createStore } from "redux";
import matkakohdeReducer from "./Reducers/matkakohdeReducer";
import tarinatReducer from "./Matkakohteet/tarinatReducer";

const reducers = combineReducers({
  tarinat: tarinatReducer,
  matkakohteet: matkakohdeReducer,
});

const store = createStore(reducers);

export default store;
