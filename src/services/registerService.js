import http from "./httpService";

export function registerUser(user) {
  return http.post("/users", {
    name: user.registerUsername,
    password: user.registerPassword,
    email: `${user.registerUsername}@movie.com`
  });
}
