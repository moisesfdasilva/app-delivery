import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  // 22-CONSTRUIR A PÁGINA
  // 23-DEVE ESTAR IGUAL AO BANCO DE DADOS
  // 24-CLICA NO CARD E VAI À TELA DE DETALHES

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
          <Link
            key={ ord.id }
            to={ `/customer/orders/${ord.id}` }
          >
            <div data-testid={ `customer_orders__element-order-id-${ord.id}` }>
              <p>Pedido</p>
              <p>{ ord.id }</p>
            </div>
            <div data-testid={ `customer_orders__element-delivery-status-${ord.id}` }>
              <p>{ ord.status }</p>
            </div>
            <div data-testid={ `customer_orders__element-order-date-${ord.id}` }>
              <p>{ ord.saleDate }</p>
            </div>
            <div data-testid={ `customer_orders__element-card-price-${ord.id}` }>
              <p>{ ord.price }</p>
            </div>
            <div data-testid={ `seller_orders__element-card-address-${ord.id}` }>
              <p>{ ord.address }</p>
            </div>
          </Link>
        )) }
      </section>
    </main>
  );
}

export default CustomerOrder;
