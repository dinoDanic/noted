import mongoose from "mongoose";

const ColumnsSchema = mongoose.Schema({
  name: String,
  items: Array,
});

export const Columns = mongoose.model("column", ColumnsSchema);
