const inputValidCustomerMock = {
  email: 'penelope@charmosa.com',
  id: 5,
  name: 'Sra. Penelope Charmosa',
  role: 'customer',
  password: '!penelope!!',
};

const outputValidCustomerMock = {
  data: { token: true, user: inputValidCustomerMock },
};

const outputProductsMock = {
  products: [
    {
      id: 1,
      name: 'Corote Amarela 500ml',
      price: '4.20',
      urlImage: 'http://localhost:3001/images/corote_amarela_500ml.jpg',
    },
    {
      id: 2,
      name: 'Corote Roxa 500ml',
      price: '4.20',
      urlImage: 'http://localhost:3001/images/corote_roxa_500ml.jpg',
    },
  ],
};

const outputOrdersMock = {
  orders: [
    {
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: '8.60',
      deliveryAddress: 'Avenida A',
      deliveryNumber: '860',
      saleDate: '2023-04-10T21:36:23.000Z',
      status: 'Pendente',
    },
    {
      id: 2,
      userId: 3,
      sellerId: 2,
      totalPrice: '17.20',
      deliveryAddress: 'Avenida A',
      deliveryNumber: '860',
      saleDate: '2023-04-11T21:36:23.000Z',
      status: 'Pendente',
    },
  ],
};

module.exports = {
  inputValidCustomerMock,
  outputValidCustomerMock,
  outputProductsMock,
  outputOrdersMock,
};
