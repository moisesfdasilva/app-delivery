import React, { useState } from 'react';

import TbCustOrdDetBody from '../../components/tbCustOrdDetBody';
import TbCustOrdDetHeader from '../../components/tbCustOrdDetHeader';

function CustomerOrderDetail() {
  const [order, setOrder] = useState({
    id: 1,
    name: 'Sr. Cicrano',
    price: 'R$ 23,80',
    seller: 'Sr. Fulana',
    saleDate: '08/04/21',
    status: 'PENDENTE',
    products: [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        qt: 4,
        cost: 'R$ 2,20',
        totalCost: 'R$8,80',
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        qt: 2,
        cost: 'R$ 7,50',
        totalCost: 'R$15,00',
      },
    ],
  });
  return (
    <>
      <nav>
        <div data-testid="customer_products__element-navbar-link-products">
          PRODUTOS
        </div>
        <div data-testid="customer_products__element-navbar-link-orders">
          MEUS PEDIDOS
        </div>
        <div data-testid="customer_products__element-navbar-user-full-name">
          { order.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
      <section>
        <h1>Detalhe do Pedido</h1>
      </section>
      <table>
        <TbCustOrdDetHeader
          key={ order.id }
          id={ order.id }
          seller={ order.seller }
          saleDate={ order.saleDate }
          status={ order.status }
        />
        <tbody>
          { order.products.map(({ id, name, qt, cost, totalCost }) => (
            <TbCustOrdDetBody
              key={ id }
              id={ id }
              name={ name }
              qt={ qt }
              cost={ cost }
              totalCost={ totalCost }
            />
          )) }
        </tbody>
      </table>
      <section>
        <h1>{ order.price }</h1>
      </section>
    </>
  );
}

export default CustomerOrderDetail;
