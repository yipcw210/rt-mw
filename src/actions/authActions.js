import { SAVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types";

export function saveCurrentUser(payload) {
  return { type: SAVE_CURRENT_USER, payload };
}
export function logoutCurrentUser() {
  return { type: LOGOUT_CURRENT_USER };
}
