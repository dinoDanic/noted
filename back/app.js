import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/users.routes.js";
import notesRoutes from "./routes/notes.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/notes", notesRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.DB_PORT);
    console.log("connected to port", process.env.DB_PORT);
  })
  .catch((err) => console.log(err.message));
