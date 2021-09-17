import { Note } from "../modules/notes.module.js";

export const createNote = async (req, res) => {
  const newNote = req.body;
  try {
    const createNote = new Note(newNote);
    const respond = await createNote.save();
    res.json(respond);
  } catch (error) {}
};

export const getNotes = async (req, res) => {
  try {
    const noteData = await Note.find();
    res.json(noteData);
  } catch (error) {}
};