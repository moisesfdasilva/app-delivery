const { Sales } = require('../database/models');

const getAllCustomerOrders = (userId) => {
  return Sales.findAll({ where: { userId:userId } });
  // findAll({ where: { authorId: 2 } });
}

module.exports = {
  getAllCustomerOrders,
};