import http from "./httpService";

export function getMovie() {
  return http.get("/movies");
}

export function responseToMovie(movieId, response) {
  return http.put(`/movies/${movieId}/response`, response);
}

export function addMovie(movie) {
  return http.post("/movies", movie);
}
