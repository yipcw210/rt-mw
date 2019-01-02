import { combineReducers } from "redux";
import { register } from "./registerReducer";
import { auth } from "./authReducer";
import { movie } from "./movieReducer";
import { navBar } from "./navBarReducer";
import { newMovie } from "./newMovieReducer";

export default combineReducers({ register, auth, movie, navBar, newMovie });
