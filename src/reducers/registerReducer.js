import {
  REGISTER_UPDATE_USERNAME,
  REGISTER_UPDATE_PASSWORD,
  REGISTER_UPDATE_USERNAME_ERROR,
  REGISTER_UPDATE_PASSWORD_ERROR
} from "../actions/types";

const initialState = {
  registerUsername: "",
  registerPassword: "",
  registerUsernameError: "",
  registerPasswordError: ""
};
export function register(state, action = {}) {
  switch (action.type) {
    case REGISTER_UPDATE_USERNAME:
      return { ...state, registerUsername: action.payload };
    case REGISTER_UPDATE_PASSWORD:
      return { ...state, registerPassword: action.payload };
    case REGISTER_UPDATE_USERNAME_ERROR:
      return { ...state, registerUsernameError: action.payload };
    case REGISTER_UPDATE_PASSWORD_ERROR:
      return { ...state, registerPasswordError: action.payload };

    default:
      return initialState;
  }
}
