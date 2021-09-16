import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  email: String,
  password: String,
});

export const Users = mongoose.model("users", usersSchema);
