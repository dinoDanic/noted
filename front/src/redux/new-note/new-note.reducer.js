import newNoteActionType from "./new-note.actiontype";

const INITIAL_STATE = {
  title: "",
  text: "",
  color: "#333",
};

export const newNoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newNoteActionType.UPDATE_NOTE:
      return {
        ...state,
        ...action.payload,
      };
    case newNoteActionType.UPDATE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
