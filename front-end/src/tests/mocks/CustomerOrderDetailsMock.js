const outputOrderDetailsMock = {
  order: {
    id: 333,
    userId: 44,
    sellerId: 77,
    totalPrice: '8.40',
    deliveryAddress: 'Santos Rua',
    deliveryNumber: '363',
    saleDate: '2023-04-10T21:45:25.000Z',
    status: 'Em Trânsito',
    user: { name: 'Coelho Ricochete' },
    seller: { name: 'Silvio Santos' },
    products: [
      {
        id: 2,
        name: 'Corote Azul 500ml',
        price: '4.20',
        urlImage: 'http://localhost:3001/images/corote_azul_500ml.jpg',
        SalesProducts: { saleId: 3, productId: 2, quantity: 2 },
      },
    ],
  },
};

module.exports = {
  outputOrderDetailsMock,
};
