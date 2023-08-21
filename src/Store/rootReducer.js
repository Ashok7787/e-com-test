import { combineReducers } from "redux";
import { authReducer } from "../Container/Auth/AuthReducer";
import { mainReducer } from "../Container/Main/MainReducer";
//import { LOGOUT } from "../Containers/Auth/AuthTypes";
/**
 *  All of application reducers import goes here...
 */
const appReducer = combineReducers({
  auth: authReducer,
  main: mainReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
