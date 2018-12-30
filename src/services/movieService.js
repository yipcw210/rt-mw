import http from "./httpService";

export function getMovie() {
  return http.get("/movies");
}
