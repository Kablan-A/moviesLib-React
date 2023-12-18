import axios from "axios";

export default axios.create({
  baseURL: "https://movies-lib-trcx.onrender.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
