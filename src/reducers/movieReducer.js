import { FETCH_MOVIES, UPDATE_MOVIES_SEARCH_KEYWORDS } from "../actions/types";

const initialState = {
  movies: [],
  moviesSearchKeywords: ""
};

export function movie(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case UPDATE_MOVIES_SEARCH_KEYWORDS:
      return { ...state, moviesSearchKeywords: action.payload };
    default:
      return state;
  }
}
