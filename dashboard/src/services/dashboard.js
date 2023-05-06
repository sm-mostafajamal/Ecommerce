import axios from "axios";
const base_Url = "http://localhost:3001/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: base_Url,
});

export const userRequest = axios.create({
  baseURL: base_Url,
  headers: { authentication: `Bearer ${TOKEN}` },
});
