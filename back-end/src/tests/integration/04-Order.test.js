const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Model } = require('sequelize');

const {
  outputOrdersMock,
  outputOrderDetailsMock,
} = require('../mocks/OrderMock');

chai.use(chaiHttp);
const { expect } = chai;

describe('4. Teste da rota /order:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it(`4.1. Get em "/customer/:id", com id do usuário válido na rota, deve retornar status 200 e
  a lista de ordes de pedidos do usuário.`, async function () {
    sinon.stub(Model, 'findAll').resolves(outputOrdersMock);

    const response = await chai.request(app).get('/order/customer/777');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ orders: outputOrdersMock });
  });

  it(`4.2. Get em "/details/:id", com id da ordem de pedido válida na rota, deve retornar status
  200 e os detalhes pedido.`, async function () {
    sinon.stub(Model, 'findOne').resolves(outputOrderDetailsMock);

    const response = await chai.request(app).get('/order/details/333');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ order: outputOrderDetailsMock });
  });

  it(`4.3. Get em "/seller/:id", com id do vendedor válido na rota, deve retornar status
  200 e os detalhes pedido.`, async function () {
    sinon.stub(Model, 'findAll').resolves(outputOrdersMock);

    const response = await chai.request(app).get('/order/seller/999');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ orders: outputOrdersMock });
  });
});