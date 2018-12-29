import { SAVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/types";

const initialState = {
  currentUser: {
    name: ""
  }
};

export function auth(state, action) {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return { ...state, currentUser: { name: action.payload } };
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return initialState;
  }
}
