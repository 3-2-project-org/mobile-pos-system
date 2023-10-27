import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.8.123:3007/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
