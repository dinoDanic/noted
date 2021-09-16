import * as api from "../../api";
import userActionsType from "./user.actionsType";

export const newUser = (userData) => async (dispatch) => {
  try {
    const response = await api.newUserApi(userData);
    console.log(response);

    dispatch({
      type: userActionsType.NEW_USER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUserApi(userData);
    dispatch({
      type: userActionsType.NEW_USER,
      payload: data,
    });
  } catch (err) {}
};
