const Sales = require('./Sales');
const Products = require('./Products');

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('sales_products', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: DataTypes.INTEGER,
   
  }, { timestamps: false, underscored: true, tableName: 'sales_products' });

  SalesProducts.belongsTo(Sales, { foreignKey: 'saleId' });
  SalesProducts.belongsTo(Products, { foreignKey: 'productId' });

  return SalesProducts;
};
