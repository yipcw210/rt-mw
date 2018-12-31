import jwtDecode from "jwt-decode";
import http from "./httpService";

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {}
}
export function getJwt() {
  try {
    const jwt = localStorage.getItem("token");
    return jwt;
  } catch (ex) {
    return null;
  }
}

export function login(user) {
  return http.post("/auth", {
    email: `${user.loginUsername}@movie.com`,
    password: user.loginPassword
  });
}
