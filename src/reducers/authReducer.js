import { FETCH_CURRENT_USER } from "../actions/types";

const initialState = {
  currentUser: {
    name: ""
  }
};

export function auth(state, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, currentUser: { name: action.payload } };
    default:
      return initialState;
  }
}
