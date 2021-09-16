import notesActionTypes from "./notes.actionTypes";
const INITAL_STATE = [];

export const notesReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case notesActionTypes.NEW_NOTE:
      console.log(INITAL_STATE);
      return INITAL_STATE.push(action.payload);
    default:
      return state;
  }
};
