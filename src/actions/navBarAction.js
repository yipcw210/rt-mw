import { TOGGLE_NAVBAR } from "./types";

export function toggleNavBar(payload) {
  return { type: TOGGLE_NAVBAR, payload };
}
