const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');
const jwt = require('jsonwebtoken');

const {
  authValidTokenMock,
  salesBodyMock,
  authInvalidTokenMock,
} = require('../mocks/SaleMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('5. Teste da rota /sale:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`5.1. Post em "/", com o token válido na compra, deve retornar status 201 e os dados da
  compra realizada.`, async function () {
    sinon.stub(jwt, 'verify').resolves(salesBodyMock);
    sinon.stub(Model, 'create').resolves(salesBodyMock);

    const response = await chai.request(app).post('/sale')
      .set(authValidTokenMock)
      .send(salesBodyMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ sale: salesBodyMock });
  });

  it(`5.2. Post em "/", sem o token válido na compra, deve retornar status 401 com "token not
  found".`, async function () {
    const response = await chai.request(app).post('/sale');

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal('token not found');
  });
});