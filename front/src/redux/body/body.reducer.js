import { bodyActionType } from "./body.bodyActionType";

const INITIAL_STATE = {
  isLoading: false,
  newNote: false,
  cloudUpload: false,
  cloudDone: false,
};

export const bodyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bodyActionType.SET_IS_LOADING:
      return {
        isLoading: action.payload,
      };
    case bodyActionType.SET_NOTE:
      return {
        ...state,
        newNote: action.payload,
      };
    case bodyActionType.SET_CLOUD_UPLOAD:
      return {
        ...state,
        cloudUpload: action.payload,
      };
    case bodyActionType.SET_CLOUD_DONE:
      return {
        ...state,
        cloudDone: action.payload,
      };

    default:
      return state;
  }
};
