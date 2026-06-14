import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://maintenance-wizard-integrated-agentic-ai-production.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
