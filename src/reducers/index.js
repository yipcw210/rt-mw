import { combineReducers } from "redux";
import { register } from "./registerReducer";
import { auth } from "./authReducer";
import { movie } from "./movieReducer";

export default combineReducers({ register, auth, movie });
