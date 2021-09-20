import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  title: String,
  text: String,
  color: String,
});

export const Note = mongoose.model("note", NoteSchema);
