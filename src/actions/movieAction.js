import { FETCH_MOVIES } from "./types";

export function fetchMovies(payload) {
  return { type: FETCH_MOVIES, payload };
}
