const customersService = require('../service/customer.service');

const getAllCustomerOrders = async (req, res) => {
  const userId = req.params.id;
  const orders = await customersService.getAllCustomerOrders(userId);
  return res.status(200).json({ orders });
};

module.exports = {
  getAllCustomerOrders,
};