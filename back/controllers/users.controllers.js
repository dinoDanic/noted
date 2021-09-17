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
    res.json(respond);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const userData = req.body;
  const { email, password } = userData;
  let findUser;
  try {
    findUser = await Users.findOne({ email: email });
  } catch (error) {
    console.log(error.message);
    return;
  }

  if (!findUser) {
    return res.json({ message: "no user with that email, register?" });
  }

  if (password !== findUser.password) {
    res.json({ message: "pass is not good" });
    return;
  }
  findUser.password = null;
  res.json(findUser);
};
