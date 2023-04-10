const { Sales, SalesProducts } = require('../database/models');

const postSale = async (body) => {
  const { sale, products } = body;
  console.log(products);
  const newSale = await Sales.create({ ...sale, saleDate: Date.now() });

  await products.forEach((product) => SalesProducts.create({
    saleId: newSale.id,
    productId: product.id,
    quantity: product.quantity,
  }));

  return newSale;
};

module.exports = {
  postSale,
};
