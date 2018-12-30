import { FETCH_MOVIES, UPDATE_MOVIES_SEARCH_KEYWORDS } from "./types";

export function fetchMovies(payload) {
  return { type: FETCH_MOVIES, payload };
}
export function updateMoviesSearchKeywords(payload) {
  return { type: UPDATE_MOVIES_SEARCH_KEYWORDS, payload };
}
