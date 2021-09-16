import { notesReducer } from "./notes/notes.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  notes: notesReducer,
});
