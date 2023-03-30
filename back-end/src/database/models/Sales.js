module.exports = (sequelize, DataTypes) => {
  const SalesModel = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false, underscored: true, tableName: 'sales' });

  SalesModel.associate = (models) => {
    SalesModel.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    SalesModel.belongsTo(models.Users, { foreignKey: 'sellerId', as: 'seller' });
  };

  return SalesModel;
};
