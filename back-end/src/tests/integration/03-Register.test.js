const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');

const { inputNewUserMock, outputNewUserMock } = require('../mocks/RegisterMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('3. Teste da rota /register:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`3.1. Post em "/", com nome, email e senha válidos, deve retornar status 200, os dados do
  usuário(email, id, name e role) e um token.`, async function () {
    sinon.stub(Model, 'findOne')
      .onFirstCall().resolves(null)
      .onSecondCall().resolves(outputNewUserMock);
    sinon.stub(Model, 'create').resolves(true);

    const response = await chai.request(app).post('/register').send(inputNewUserMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.includes({ user: outputNewUserMock });
    expect(response.body).to.have.property('token');
  });

  it(`3.2. Post em "/", com email e senha já cadastrados no banco de dados, deve retornar status
  409 e uma messagem "Conflict".`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputNewUserMock);

    const response = await chai.request(app).post('/register').send(inputNewUserMock);

    expect(response.status).to.be.equal(409);
    expect(response.body).to.deep.equal({ message: 'Conflict' });
  });
});