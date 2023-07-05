import axios from "axios";

export const request = axios.create({
  withCredentials: true,
  timeout: 30000,
});

request.interceptors.response.use((response) => response.data);
