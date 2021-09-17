import { bodyActionType } from "./body.bodyActionType";

export const setIsLoading = (state) => ({
  type: bodyActionType.SET_IS_LOADING,
  payload: state,
});

export const setNote = (state) => ({
  type: bodyActionType.SET_NOTE,
  payload: state,
});
