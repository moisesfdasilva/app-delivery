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

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await userService.deleteUser(id);

    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: 'not found' });
  }
};

const getUsersComun = async (_req, res) => {
  const users = await userService.getUsersComun();

  return res.status(200).json({ users });
};

const getSaller = async (_req, res) => {
  const sellers = await userService.getSaller();

  return res.status(200).json({ sellers });
};

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hash = md5(password);
  const newUser = await userService.postRegister(name, email, hash, role);

  if (newUser.type) {
    return res.status(newUser.type).json({ message: newUser.message });
  }

  const user = await userService.postLogin(email, hash);

  return res.status(201).json(user);
};

const verifyTokenCustomer = (req, res) => {
  const { authorization } = req.headers;
  const result = userService.verifyTokenCustomer(authorization);
  res.status(result.status).json({ message: result.message });
};

module.exports = {
  postUserLogin,
  registerUser,
  verifyTokenCustomer,
  getSaller,
  getUsersComun,
  deleteUser,
};
