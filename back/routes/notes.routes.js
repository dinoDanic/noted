import Router from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/notes.controllers.js";

const router = Router();

router.post("/new", createNote);
router.get("/", getNotes);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
