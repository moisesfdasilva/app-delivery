const authValidTokenMock = {
  authorization: 'TOKEN-VÁLIDO',
};

const salesBodyMock = {
  user: 'USUÁRIO',
  products: ['PRODUTO-1', 'PRODUTO-2', 'PRODUTO-3'],
  newSale: 'DADOS DA VENDA',
};

const authInvalidTokenMock = {
  authorization: 'TOKEN-INVÁLIDO',
};

module.exports = {
  authValidTokenMock,
  salesBodyMock,
  authInvalidTokenMock,
};