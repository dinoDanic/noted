import * as api from "../../api";
import notesActionTypes from "../notes/notes.actionTypes";
export const createNote = (noteData) => async (dispatch) => {
  try {
    const { data } = await api.newNote(noteData);
    dispatch({
      type: notesActionTypes.NEW_NOTE,
      payload: data,
    });
  } catch (error) {}
};
