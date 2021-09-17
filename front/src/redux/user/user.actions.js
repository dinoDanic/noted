import * as api from "../../api";
import { bodyActionType } from "../body/body.bodyActionType";
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
    const response = await api.loginUserApi(userData);
    if (response.data.message) {
      alert(response.data.message);
      console.log("not ok");
      dispatch({
        type: bodyActionType.SET_IS_LOADING,
        payload: false,
      });
      return;
    }
    dispatch({
      type: userActionsType.NEW_USER,
      payload: response.data,
    });
    dispatch({
      type: bodyActionType.SET_IS_LOADING,
      payload: false,
    });
  } catch (err) {}
};
