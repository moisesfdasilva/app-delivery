const { Users } = require('../database/models');

const getByUser = async (email) => {
  const result = await Users.findOne({ where: { email } });
  return result;
};

module.exports = { getByUser };