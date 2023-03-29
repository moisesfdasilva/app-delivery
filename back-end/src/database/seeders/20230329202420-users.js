module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [{ id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator' },
      { id: 2,
        email: 'fulana@deliveryapp.com',
        name: 'Fulana Pereira',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller' },
      { id: 3,
        email: 'zebirita@email.com',
        name: 'Cliente Zé Birita',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer' }], { timestamps: false }); 
},
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
