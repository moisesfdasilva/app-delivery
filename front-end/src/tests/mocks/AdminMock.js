const inputAdminSellerMock = {
  email: 'senhoradministrador@adm.com',
  id: 100,
  name: 'Senhor Administrador',
  role: 'administrator',
  password: '=manage+!',
};

const outputValidAdminMock = {
  data: { token: true, user: inputAdminSellerMock },
};

const outputUsersMock = {
  users: [
    { id: 1, name: 'Senhor Num. 1', email: 'srnum1@app.com', role: 'seller' },
    { id: 2, name: 'Senhor Num. 2', email: 'srnum2@app.com', role: 'customer' },
    { id: 3, name: 'Senhor Num. 3', email: 'srnum3@app.com', role: 'customer' },
    { id: 4, name: 'Senhor Num. 4', email: 'srnum4@app.com', role: 'customer' },
    { id: 5, name: 'Senhor Num. 5', email: 'srnum5@app.com', role: 'customer' },
  ],
};

const newUserMock = {
  name: 'Senhor Novo',
  email: 'srnovo@app.com',
  password: '=novousuario+!',
};

module.exports = {
  inputAdminSellerMock,
  outputValidAdminMock,
  outputUsersMock,
  newUserMock,
};
