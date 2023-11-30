import axios from "axios";

export default axios.create({
  baseURL: "https://31a1-5-251-222-181.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
