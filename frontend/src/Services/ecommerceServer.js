import axios from "axios";
const baseURL = "/api/products";

export const getAll = () => axios.get(baseURL).then((res) => res.data);
