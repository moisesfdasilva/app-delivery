const md5 = require('md5');
const userService = require('../service/user.service');
const { mapError } = require('../utils/error/mapError');

const postUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const hash = md5(password);
  const user = await userService.postLogin(email, hash);

  if (user.type) {
    return res.status(mapError(user.type)).json({ message: user.message });
  }

  return res.status(200).json(user);
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = md5(password);
  const newUser = await userService.postRegister(name, email, hash);

  if (newUser.type) {
    return res.status(newUser.type).json({ message: newUser.message });
  }

  const user = await userService.postLogin(email, hash);

  return res.status(201).json(user);
};

module.exports = {
  postUserLogin,
  registerUser,
};
