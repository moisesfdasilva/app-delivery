const { Sales } = require('../database/models');

const getAllCustomerOrders = (userId) => Sales.findAll({ where: { userId } });

module.exports = {
  getAllCustomerOrders,
};