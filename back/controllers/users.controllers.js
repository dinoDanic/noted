import { Users } from "../modules/users.module.js";

export const createUser = async (req, res) => {
  const userData = req.body;
  const { email } = userData;
  try {
    const findUser = await Users.findOne({ email: email });
    if (findUser) {
      res.status(409).json({ message: "users exists, login instead" });
      return;
    }
    const newUser = await new Users(userData);
    const respond = await newUser.save();
    respond.password = null;
    console.log(respond);
    res.json(respond);
  } catch (error) {
    res.json({ error: error.message });
  }
};
