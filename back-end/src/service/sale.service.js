const { Sales, SalesProducts } = require('../database/models');

const postSale = async (body) => {
  const { newSale, products } = body;
  console.log(products);
  const salelml = await Sales.create({ ...newSale, saleDate: Date.now() });

  await Promise.all(products.map((product) => SalesProducts.create({
    saleId: salelml.id,
    productId: product.id,
    quantity: product.quantity,
  })));

  return salelml;
};

module.exports = {
  postSale,
};
