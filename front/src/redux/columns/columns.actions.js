import * as api from "../../api";
import { columnsActionType } from "./columns.actionType";

export const getColumns = () => async (dispatch) => {
  try {
    const { data } = await api.getColumns();
    dispatch({
      type: columnsActionType.GET_COLUMNS,
      payload: data,
    });
  } catch (error) {}
};
