import axios from "axios";

export const https = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

https.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});
