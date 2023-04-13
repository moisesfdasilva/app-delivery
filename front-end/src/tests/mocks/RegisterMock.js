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

const inputInvalidMock = {
  name: 'Sr. Qualquer Nome',
  email: 'zebirita@email.com',
  password: 'qualquersenha',
};

const outInvalidMock = { data: { message: 'Conflict' } };

module.exports = {
  inputValidMock,
  outputValidMock,
  inputInvalidMock,
  outInvalidMock,
};
