import Router from "express";
import {
  createNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controllers.js";

const router = Router();

router.post("/new", createNote);
router.get("/", getNotes);
router.patch("/:id", updateNote);

export default router;
