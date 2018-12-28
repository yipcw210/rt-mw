import {
  REGISTER_UPDATE_USERNAME,
  REGISTER_UPDATE_PASSWORD,
  REGISTER_UPDATE_USERNAME_ERROR,
  REGISTER_UPDATE_PASSWORD_ERROR
} from "./types";
export function updateRegisterUsername(payload) {
  return { type: REGISTER_UPDATE_USERNAME, payload };
}
export function updateRegisterPassword(payload) {
  return { type: REGISTER_UPDATE_PASSWORD, payload };
}
export function updateRegisterUsernameError(payload) {
  return { type: REGISTER_UPDATE_USERNAME_ERROR, payload };
}
export function updateRegisterPasswordError(payload) {
  return { type: REGISTER_UPDATE_PASSWORD_ERROR, payload };
}
