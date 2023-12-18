import axios from "axios";

export default axios.create({
  baseURL: "https://movies-lib-trcx.onrender.com",
  headers: {
    "Access-Control-Allow-Origin": "https://movies-lib-trcx.onrender.com",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});
