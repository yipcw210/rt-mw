import axios from "axios";
import { getJwt } from "./authService";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["x-auth-token"] = getJwt();
axios.interceptors.response.use(null, error => {
  if (error.response) {
    const expectedError =
      error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      console.log("logging unexpected error", error);
      alert("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
  return Promise.reject("No response from server");
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
