import React, { useState } from 'react';

import OrderCard from '../../components/orderCard';

function CustomerOrder() {
  const [customerOrders, setCustomerOrders] = useState({
    name: 'Sr. Cicrano',
    custOrders: [
      { id: 1,
        status: 'PENDENTE',
        saleDate: '08/04/21',
        price: 'R$ 23,80',
        address: 'R. A, Casa 1' },
      { id: 2,
        status: 'PREPARANDO',
        saleDate: '08/04/21',
        price: 'R$ 14,20',
        address: 'R. B, Casa 1' },
      { id: 3,
        status: 'ENTREGUE',
        saleDate: '07/04/21',
        price: 'R$ 28,46',
        address: 'R. C, Casa 1' },
    ],
  });

  return (
    <main>
      <nav>
        <div data-testid="customer_products__element-navbar-link-products">
          PRODUTOS
        </div>
        <div data-testid="customer_products__element-navbar-link-orders">
          MEUS PEDIDOS
        </div>
        <div data-testid="customer_products__element-navbar-user-full-name">
          { customerOrders.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
      <section>
        { customerOrders.custOrders.map((ord) => (
          <OrderCard
            key={ ord.id }
            id={ ord.id }
            status={ ord.status }
            saleDate={ ord.saleDate }
            price={ ord.price }
            address={ ord.address }
          />
        )) }
      </section>
    </main>
  );
}

export default CustomerOrder;
