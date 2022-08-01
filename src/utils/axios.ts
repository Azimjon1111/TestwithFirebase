import axios from "axios";
export const baseUrl=""
const instance = axios.create({
  baseURL: baseUrl
});

export default instance;