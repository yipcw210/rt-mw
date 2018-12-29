import jwtDecode from "jwt-decode";
import http from "./httpService";

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {}
}

export function login({ username, password }) {
  return http.post("/auth", { email: `${username}@movie.com`, password });
}
