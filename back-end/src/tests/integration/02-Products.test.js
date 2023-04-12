const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');

const { outputProductsMock } = require('../mocks/ProductsMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('2. Teste da rota /products:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`2.1. Get em "/", deve retornar a lista de produtos.`, async function () {
    sinon.stub(Model, 'findAll').resolves(outputProductsMock);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ products: outputProductsMock });
  });
});