const inputValidMock = {
  name: 'Novo Zebirita',
  email: 'novozebirita@email.com',
  password: '$#novozebirita#$',
};

const outputValidMock = {
  data: {
    token: true,
    user: { dataValues: inputValidMock },
  },
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

const inputInvalidMock = {
  name: 'Sr. Qualquer Nome',
  email: 'zebirita@email.com',
  password: 'qualquersenha',
};

const outInvalidMock = { data: { message: 'Conflict' } };

module.exports = {
  inputValidMock,
  outputValidMock,
  outputProductsMock,
  inputInvalidMock,
  outInvalidMock,
};
