import notesActionTypes from "./notes.actionTypes";
let INITAL_STATE = [];

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case notesActionTypes.NEW_NOTE:
      return [...state, action.payload];
    case notesActionTypes.GET_NOTES:
      return action.payload;
    default:
      return state;
  }
};
