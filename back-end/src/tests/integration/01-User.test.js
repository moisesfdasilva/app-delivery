const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');

const {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputInvalidCustomerMock,
 } = require('../mocks/UserMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('1. Teste da rota /user', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`1.1. Post em "/", com usuário e senha válidos, deve retornar status 200, os dados do
  usuário(email, id, name e role) e um token.`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputValidCustomerMock);

    const response = await chai.request(app).post('/user').send(inputValidCustomerMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.includes({ user: outputValidCustomerMock });
    expect(response.body).to.have.property('token');
  });

  it(`1.2. Post em "/", com usuário inválido, deve retornar status XXX, os dados do
  usuário(email, id, name e role) e um token.`, async function () {
    sinon.stub(Model, 'findOne').resolves();

    const response = await chai.request(app).post('/user').send(inputInvalidCustomerMock);

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Not found' });
  });
});