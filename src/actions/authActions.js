import {
  SAVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  LOGIN_UPDATE_USERNAME,
  LOGIN_UPDATE_PASSWORD,
  LOGIN_UPDATE_USERNAME_ERROR,
  LOGIN_UPDATE_PASSWORD_ERROR
} from "./types";

export function saveCurrentUser(payload) {
  return { type: SAVE_CURRENT_USER, payload };
}
export function logoutCurrentUser() {
  return { type: LOGOUT_CURRENT_USER };
}
export function updateLoginUsername(payload) {
  return { type: LOGIN_UPDATE_USERNAME, payload };
}
export function updateLoginPassword(payload) {
  return { type: LOGIN_UPDATE_PASSWORD, payload };
}
export function updateLoginUsernameError(payload) {
  return { type: LOGIN_UPDATE_USERNAME_ERROR, payload };
}
export function updateLoginPasswordError(payload) {
  return { type: LOGIN_UPDATE_PASSWORD_ERROR, payload };
}
