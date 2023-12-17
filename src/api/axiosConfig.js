import axios from "axios";

export default axios.create({
  baseURL: "https://77c8-2-73-167-114.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
