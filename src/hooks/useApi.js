import axios from "axios";

export default function useApi() {
  // do not modify original axios
  const api = axios.create();

  api.defaults.baseURL = "https://api.adoptez1artisan.com";

  api.defaults.headers.common = {
    "content-type": "application/json; charset=UTF-8",
  };

  return api;
}
