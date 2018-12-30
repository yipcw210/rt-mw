import { FETCH_MOVIES } from "../actions/types";

const initialState = {
  movies: ""
};

export function movie(state, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return initialState;
  }
}
