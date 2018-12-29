import { FETCH_CURRENT_USER } from "./types";

export function saveCurrentUser(payload) {
  return { type: FETCH_CURRENT_USER, payload };
}
