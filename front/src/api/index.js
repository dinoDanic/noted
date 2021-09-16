import axios from "axios";

const url = "http://localhost:5000";

export const newUserApi = (userData) =>
  axios.post(`${url}/users/new`, userData);

export const loginUserApi = (data) => axios.post(`${url}/users/login`, data);
