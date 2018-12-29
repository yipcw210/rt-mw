import { combineReducers } from "redux";
import { register } from "./registerReducer";
import { auth } from "./authReducer";

export default combineReducers({ register, auth });
