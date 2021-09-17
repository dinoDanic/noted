import axios from "axios";

const url = "http://localhost:5000";

export const newUserApi = (userData) =>
  axios.post(`${url}/users/new`, userData);

export const loginUserApi = (data) => axios.post(`${url}/users/login`, data);

export const newNote = (data) => axios.post(`${url}/notes/new`, data);

export const getNotes = () => axios.get(`${url}/notes/`);

export const updateNote = (id, data) => axios.patch(`${url}/notes/${id}`, data);
