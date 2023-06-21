// 중앙 data 관리고(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import user from "../modules/user";

const rootReducer = combineReducers({
  counter,
  user,
});
const store = createStore(rootReducer);

export default store;

// App.ex.1-14.jsx
