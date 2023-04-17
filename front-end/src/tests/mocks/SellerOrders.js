const inputValidSellerMock = {
  email: 'silviosantos@sbt.com',
  id: 100,
  name: 'Silvio Santos',
  role: 'seller',
  password: 'barrasDeOuro_>_dinheiro',
};

const outputValidSellerMock = {
  data: { token: true, user: inputValidSellerMock },
};

const outputOrdersMock = {
  orders: [
    {
      id: 1,
      userId: 3,
      sellerId: 100,
      totalPrice: '8.60',
      deliveryAddress: 'Avenida A',
      deliveryNumber: '860',
      saleDate: '2023-04-10T21:36:23.000Z',
      status: 'Pendente',
    },
    {
      id: 2,
      userId: 3,
      sellerId: 100,
      totalPrice: '17.20',
      deliveryAddress: 'Avenida A',
      deliveryNumber: '860',
      saleDate: '2023-04-11T21:36:23.000Z',
      status: 'Pendente',
    },
  ],
};

const outputOrderDetailsMock = {
  order: {
    id: 333,
    userId: 44,
    sellerId: 2,
    totalPrice: '8.40',
    deliveryAddress: 'Santos Rua',
    deliveryNumber: '363',
    saleDate: '2023-04-10T21:45:25.000Z',
    status: 'Pendente',
    user: { name: 'Coelho Ricochete' },
    seller: { name: 'Fulana Pereira' },
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
  inputValidSellerMock,
  outputValidSellerMock,
  outputOrdersMock,
  outputOrderDetailsMock,
};
