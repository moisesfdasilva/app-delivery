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

module.exports = {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputInvalidCustomerMock,
}