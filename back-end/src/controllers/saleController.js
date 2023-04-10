const saleService = require('../service/sale.service');

const postSale = async (req, res) => {
  const { body } = req;
  const sale = await saleService.postSale(body);

  res.status(201).json({ sale });
};

module.exports = {
  postSale,
};