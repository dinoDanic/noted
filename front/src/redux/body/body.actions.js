import { bodyActionType } from "./body.bodyActionType";

export const setIsLoading = (state) => ({
  type: bodyActionType.SET_IS_LOADING,
  payload: state,
});
