import axios from "axios";
import { ENDPOINTS } from "../utils/constants";

import { getStorage } from "../utils/localStorage";

const client = () => {
  const instance = axios.create({
    baseURL: ENDPOINTS.BASE_ENDPOINT,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log(error);

      return Promise.reject(error);
    }
  );

  return instance;
};

export default client();
