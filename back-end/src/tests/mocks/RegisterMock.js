const inputNewUserMock = {
  name: 'Coelho Ricochete',
  email: 'coelho@ricochete.com',
  password: 'bing-bing-bing!',
};

const outputNewUserMock = {
  dataValues: {
    id: 44,
    name: 'Coelho Ricochete',
    email: 'coelho@ricochete.com',
    role: 'customer',
  },
};

module.exports = {
  inputNewUserMock,
  outputNewUserMock,
};