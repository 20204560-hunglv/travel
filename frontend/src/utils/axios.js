import axios from "axios";

const instance = axios.create({
  baseURL: "https://travel-backend-wrsl.onrender.com"
});

export default instance;