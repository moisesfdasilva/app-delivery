const userService = require('../service/user.service');
const { mapError } = require('../utils/error/mapError');
const md5 = require('md5');

const postUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const hash = md5(password);
  const user = await userService.postLogin(email, hash);

  if(user.type) return res.status(mapError(user.type))
    .json({ message: user.message });

  return res.status(200).json({ token: user });
};

module.exports = {
  postUserLogin,
};