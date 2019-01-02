import { TOGGLE_NAVBAR } from "../actions/types";

const initialState = {
  navBarToggled: false
};

export function navBar(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return { ...state, navBarToggled: action.payload };
    default:
      return state;
  }
}
