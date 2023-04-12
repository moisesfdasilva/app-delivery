const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');
const jwt = require('jsonwebtoken');

const {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputInvalidCustomerMock,
  authValidTokenMock,
  authInvalidTokenMock,
  outputSellers,
 } = require('../mocks/UserMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('1. Teste da rota /user', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`1.1. Post em "/", com email e senha válidos, deve retornar status 200, os dados do
  usuário(email, id, name e role) e um token.`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputValidCustomerMock);

    const response = await chai.request(app).post('/user').send(inputValidCustomerMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.includes({ user: outputValidCustomerMock });
    expect(response.body).to.have.property('token');
  });

  it(`1.2. Post em "/", com email inválido, deve retornar status 404 e uma message "Not
  found".`, async function () {
    sinon.stub(Model, 'findOne').resolves();

    const response = await chai.request(app).post('/user').send(inputInvalidCustomerMock);

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Not found' });
  });

  it(`1.3. Get em "/data", com email válido, deve retornar status 200, os dados do usuário
  (email, id, name e role) e um token.`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputValidCustomerMock);

    const response = await chai.request(app).get('/user/data')
      .send(inputValidCustomerMock.email);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.includes({ user: outputValidCustomerMock });
    expect(response.body).to.have.property('token');
  });

  it(`1.4. Get em "/verify", com token válido no header, deve retornar status 200 e a mensagem
  "OK".`, async function () {
    sinon.stub(jwt, 'verify').resolves({ role: 'algo'});

    const response = await chai.request(app).get('/user/verify').set(authValidTokenMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ message: 'OK' });
  });

  it(`1.5. Get em "/verify", com token inválido no header, deve retornar status 401 e a mensagem
  "NOT_AUTHORIZED".`, async function () {
    sinon.stub(jwt, 'verify').rejects

    const response = await chai.request(app).get('/user/verify').set(authInvalidTokenMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'NOT_AUTHORIZED' });
  });

  it(`1.6. Get em "/sellers", deve retornar a lista de vendedores.`, async function () {
    sinon.stub(Model, 'findAll').resolves(outputSellers);

    const response = await chai.request(app).get('/user/sellers');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ sellers: outputSellers });
  });
});