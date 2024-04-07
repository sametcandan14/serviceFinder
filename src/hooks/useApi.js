import axios from "axios";

export default function useApi() {
  // do not modify original axios
  const api = axios.create();

  // api.defaults.baseURL = "https://api.adoptez1artisan.com";

  api.defaults.baseURL = "http://localhost:3050";

  // api.defaults.validateStatus = (status) => {
  //   return status >= 200 && status < 599;
  // };

  // api.defaults.headers.common = {
  //   "content-type": "application/json; charset=UTF-8",
  // };

  return api;
}
