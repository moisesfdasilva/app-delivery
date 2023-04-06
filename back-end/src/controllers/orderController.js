const ordersService = require('../service/order.service');

const getAllCustomerOrders = async (req, res) => {
  const userId = req.params.id;
  const orders = await ordersService.getAllCustomerOrders(userId);
  return res.status(200).json({ orders });
};

const getCustomerOrderDetails = async (req, res) => {
  const orderId = req.params.id;
  const order = await ordersService.getCustomerOrderDetails(orderId);
  return res.status(200).json({ order });
};

const getAllSellerOrders = async (req, res) => {
  const sellerId = req.params.id;
  const orders = await ordersService.getAllSellerOrders(sellerId);
  return res.status(200).json({ orders });
};

module.exports = {
  getAllCustomerOrders,
  getCustomerOrderDetails,
  getAllSellerOrders,
};