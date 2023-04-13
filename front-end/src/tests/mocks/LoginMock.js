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

const inputInvalidCustomerMock = {
  email: 'dick@vigarista.com',
  password: '!vigarista!!',
};

const outputInvalidCustomerMock = {
  message: 'Not found',
};

module.exports = {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputValidSellerMock,
  outputValidSellerMock,
  inputInvalidCustomerMock,
  outputInvalidCustomerMock,
};
