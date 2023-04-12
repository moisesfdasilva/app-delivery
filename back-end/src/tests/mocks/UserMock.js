const inputValidCustomerMock = {
  email: 'penelope@charmosa.com',
  password: '!penelope!!',
};

const outputValidCustomerMock = {
  dataValues: {
    email: 'penelope@charmosa.com',
    id: 5,
    name: 'Sra. Penelope Charmosa',
    role: 'customer',
  },
};

const inputInvalidCustomerMock = {
  email: 'dick@vigarista.com',
  password: '!vigarista!!',
};

const authValidTokenMock = {
  authorization: 'TOKEN-VÁLIDO',
};

const authInvalidTokenMock = {
  authorization: 'TOKEN-INVÁLIDO',
};

const outputSellers = [
  { id: 7, name: 'Mosquete', role: "seller" },
  { id: 8, name: 'Mosquito', role: "seller" },
  { id: 15, name: 'Moscardo', role: "seller" },
];

module.exports = {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputInvalidCustomerMock,
  authValidTokenMock,
  authInvalidTokenMock,
  outputSellers,
};