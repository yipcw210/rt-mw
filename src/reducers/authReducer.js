import {
  SAVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  LOGIN_UPDATE_USERNAME,
  LOGIN_UPDATE_PASSWORD,
  LOGIN_UPDATE_USERNAME_ERROR,
  LOGIN_UPDATE_PASSWORD_ERROR
} from "../actions/types";

const initialState = {
  currentUser: {},
  loginUsername: "",
  loginPassword: "",
  loginUsernameError: "",
  loginPasswordError: ""
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case LOGOUT_CURRENT_USER:
      return initialState;
    case LOGIN_UPDATE_USERNAME:
      return { ...state, loginUsername: action.payload };
    case LOGIN_UPDATE_PASSWORD:
      return { ...state, loginPassword: action.payload };
    case LOGIN_UPDATE_USERNAME_ERROR:
      return { ...state, loginUsernameError: action.payload };
    case LOGIN_UPDATE_PASSWORD_ERROR:
      return { ...state, loginPasswordError: action.payload };
    default:
      return state;
  }
}
