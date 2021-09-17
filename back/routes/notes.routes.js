import Router from "express";
import { createNote, getNotes } from "../controllers/notes.controllers.js";

const router = Router();

router.post("/new", createNote);
router.get("/", getNotes);

export default router;
