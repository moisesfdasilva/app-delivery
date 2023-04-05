const { Sales, Users, Products } = require('../database/models');

const getAllCustomerOrders = (userId) => Sales.findAll({ where: { userId } });

const getCustomerOrderDetails = (orderId) => Sales.findOne({
  where: { id: orderId },
  include: [
    {
      model: Users,
      as: 'user',
      attributes: { exclude: ['id', 'email', 'password', 'role'] },
    },
    {
      model: Users,
      as: 'seller',
      attributes: { exclude: ['id', 'email', 'password', 'role'] },
    },
    {
      model: Products,
      as: 'products',
    },
  ],
});

module.exports = {
  getAllCustomerOrders,
  getCustomerOrderDetails,
};