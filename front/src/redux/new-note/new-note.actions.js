import newNoteActionType from "./new-note.actiontype";

export const updateNewNote = (newNoteData) => ({
  type: newNoteActionType.UPDATE_NOTE,
  payload: newNoteData,
});

export const updateNewNoteColor = (color) => ({
  type: newNoteActionType.UPDATE_COLOR,
  payload: color,
});
