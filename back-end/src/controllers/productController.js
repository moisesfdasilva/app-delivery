const productsService = require('../service/product.service');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json({ products });
};

module.exports = {
  getAllProducts,
};