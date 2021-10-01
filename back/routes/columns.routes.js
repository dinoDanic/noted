import Router from "express";
import { getColumns } from "../controllers/columns.controllers.js";

const router = Router();

router.get("/", getColumns);

export default router;
