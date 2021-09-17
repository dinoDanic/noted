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

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const filter = { _id: id };
  const update = data;
  try {
    await Note.findOneAndUpdate(filter, update);
    res.json({ message: "updated!" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    return;
  }
};
