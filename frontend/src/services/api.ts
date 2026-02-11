import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true, // se você usar cookies
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ou outro local
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
