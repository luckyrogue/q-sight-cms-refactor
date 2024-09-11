import axios from "axios";
import { modeObserver } from "@/api/api.config.ts";
import $cookie from "js-cookie";

export const https = axios.create({
  baseURL: modeObserver(import.meta.env.MODE),
});

https.interceptors.request.use((config) => {
  const token = $cookie.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
