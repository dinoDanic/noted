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

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.getNotes();
    dispatch({
      type: notesActionTypes.GET_NOTES,
      payload: data,
    });
  } catch (error) {}
};
