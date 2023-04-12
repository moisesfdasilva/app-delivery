const { Op } = require('sequelize');
const { Users } = require('../database/models');
const { jwtEncode, jwtDecode } = require('../utils/jwtToken/jwt');

const verifyTokenCustomer = (token) => {
  try {
    jwtDecode(token);
    return { status: 200, message: 'OK' };
  } catch (error) {
    return { status: 401, message: 'NOT_AUTHORIZED' };
  }
};

const deleteUser = async (id) => {
  await Users.destroy({ where: { id } });
};

const getUsersComun = async () => {
  const users = await Users.findAll({
    where: {
      role: {
        [Op.not]: 'administrator',
      },
    },
    attributes: { exclude: 'password' },
  });

  return users;
};

const getSaller = async () => {
  const sellers = await Users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'email'] },
  });

  return sellers;
};

const postLogin = async (email, password) => {
  const user = await Users.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { type: 'USER_NOT_FOUND', message: 'Not found' };
  const token = jwtEncode(user.dataValues);

  return { user, token };
};

const postRegister = async (name, email, password, role) => {
  const user = await Users.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'id'] },
  });

  if (user) {
    return { type: 409, message: 'Conflict' };
  }
  await Users.create({ name, email, password, role });
  return { type: null, message: 'Created' };
};

module.exports = {
  postLogin,
  postRegister,
  verifyTokenCustomer,
  getSaller,
  getUsersComun,
  deleteUser,
};
