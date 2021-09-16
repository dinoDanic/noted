import * as api from "../../api";
import userActionsType from "./user.actionsType";

export const newUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.newUserApi(userData);
    console.log(data.message);
    dispatch({
      type: userActionsType.NEW_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
