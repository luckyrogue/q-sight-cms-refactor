import axios from "axios";
import { modeObserver } from "@/api/api.config.ts";

export const https = axios.create({
  baseURL: modeObserver(import.meta.env.MODE),
});

https.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
