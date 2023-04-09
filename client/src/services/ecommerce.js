import axios from "axios";
const base_Url = "http://localhost:3001/api/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmMzYTc4MzIxNTE5NmIxNjdiMzQ2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk2MzM1OCwiZXhwIjoxNjgxMDQ5NzU4fQ.nu433Y8Nta3mI7UjWWOrAtSC4AszyqsJl5edRZRGZwQ";

export const publicRequest = axios.create({
  baseURL: base_Url,
});

export const userRequest = axios.create({
  baseURL: base_Url,
  headers: { authentication: `Bearer ${token}` },
});
