import axios from "axios";

const url = "http://localhost:5000/users/new";

export const newUserApi = (userData) => axios.post(url, userData);
