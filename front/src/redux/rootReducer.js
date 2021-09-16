import userReducer from "./user/user.reducer";
import { notesReducer } from "./notes/notes.reducer";
import { bodyReducer } from "./body/body.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  notes: notesReducer,
  user: userReducer,
  body: bodyReducer,
});
