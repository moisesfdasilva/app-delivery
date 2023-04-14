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

const outputSellersMock = {
  sellers: [
    { id: 7, name: 'Mosquete', role: 'seller' },
    { id: 8, name: 'Mosquito', role: 'seller' },
    { id: 15, name: 'Moscardo', role: 'seller' },
  ],
};

module.exports = {
  inputValidCustomerMock,
  outputValidCustomerMock,
  outputProductsMock,
  outputSellersMock,
};
