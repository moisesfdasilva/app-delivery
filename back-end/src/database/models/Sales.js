const Users = require('./Users');

module.exports = (sequelize, DataTypes) => {
  const SalesModel = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false, underscored: true, tableName: 'sales' });

  SalesModel.belongsTo(Users, { foreignKey: 'userId', as: 'userId' });
  SalesModel.belongsTo(Users, { foreignKey: 'sellerId', as: 'sellerId' });
  Users.hasMany(SalesModel, { foreignKey: 'userId', as: 'userId' });
  Users.hasMany(SalesModel, { foreignKey: 'sellerId', as: 'sellerId' });

  return SalesModel;
};
