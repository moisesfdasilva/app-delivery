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

module.exports = { postLogin };