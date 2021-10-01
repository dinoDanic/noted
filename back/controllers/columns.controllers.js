import { Columns } from "../modules/columns.module.js";

export const getColumns = async (req, res) => {
  try {
    const response = await Columns.find();
    res.json(response);
  } catch (err) {}
};
