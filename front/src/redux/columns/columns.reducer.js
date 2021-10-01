import { columnsActionType } from "./columns.actionType";

const INITIAL_STATE = {};

export const columnsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case columnsActionType.GET_COLUMNS:
      return action.payload;
    default:
      return state;
  }
};
