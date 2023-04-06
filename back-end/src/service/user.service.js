const { Users } = require('../database/models');
const jwtEncode = require('../utils/jwtToken/jwtEncode');

const postLogin = async (email, password) => {
  const user = await Users.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'id'] },
  });

  if (!user) return { type: 'USER_NOT_FOUND', message: 'Not found' };

  const token = jwtEncode({ user });

  return { token, user };
};

const postRegister = async (name, email, password) => {
  const user = await Users.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'id'] },
  });

  if (user) {
    return { type: 409, message: 'Conflict' };
  }
  await Users.create({ name, email, password, role: 'customer' });
  return { type: null, message: 'Created' };
};

module.exports = { postLogin, postRegister };
