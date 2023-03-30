const { UsersModel } = require('../database/models/Users');

const getByUser = (email) => UsersModel.findOne({
  where: { email },
});

const getByUser2 = (email) => console.log(email);

module.exports = { getByUser, getByUser2 };