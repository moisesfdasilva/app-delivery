const { Sales } = require('../database/models');

const postSale = async (body) => {
  const sale = await Sales.create({ ...body, saleDate: Date.now() });

  return sale;
};

module.exports = {
  postSale,
};
