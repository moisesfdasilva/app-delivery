module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      userId: { allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: 'user_id', 
          references: { model: 'users', key: 'id' },
      },
      sellerId: { allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id', 
        references: { model: 'users', key: 'id' },
      },
      totalPrice: { allowNull: false, type: Sequelize.DECIMAL(9, 2), field: 'total_price' },
      deliveryAddress: { type: Sequelize.STRING(100), field: 'delivery_address' }, 
      deliveryNumber: { allowNull: false, type: Sequelize.STRING(50), field: 'delivery_number' },
      saleDate: { allowNull: false, type: Sequelize.DATE, field: 'sale_date' },
      status: { allowNull: false, type: Sequelize.STRING(50) } });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  },
};