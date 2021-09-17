import * as api from "../../api";
import { bodyActionType } from "../body/body.bodyActionType";
import notesActionTypes from "../notes/notes.actionTypes";

export const createNote = (noteData) => async (dispatch) => {
  try {
    const response = await api.newNote(noteData);
    console.log(response);
    if (response.statusText !== "OK") {
      alert("failed creating note");
      return;
    }
    dispatch({
      type: notesActionTypes.NEW_NOTE,
      payload: response.data,
    });
    dispatch({
      type: bodyActionType.SET_NOTE,
      payload: false,
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

export const updateNote = (data) => async (dispatch) => {
  const { _id } = data;
  try {
    await api.updateNote(_id, data);
  } catch (error) {}
};
