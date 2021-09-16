import { bodyActionType } from "./body.bodyActionType";

const INITIAL_STATE = {
  isLoading: false,
};

export const bodyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bodyActionType.SET_IS_LOADING:
      return {
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
