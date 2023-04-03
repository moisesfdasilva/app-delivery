import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CustomerProducts() {
  const [customerProducts, _setCustomerProducts] = useState({
    name: 'Sr. Fulano',
    custProducts: [
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

  const history = useHistory();

  const orderDetails = (id) => { history.push(`/customer/orders/${id}`); };

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
          { customerProducts.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
      <section>
        { customerProducts.custProducts.map((prod) => (
          <section
            key={ prod.id }
            onClick={ () => orderDetails(prod.id) }
          >
            <div data-testid={ `customer_orders__element-order-id-${prod.id}` }>
              <p>Pedido</p>
              <p>{ prod.id }</p>
            </div>
            <div data-testid={ `customer_orders__element-delivery-status-${prod.id}` }>
              <p>{ prod.status }</p>
            </div>
            <div data-testid={ `customer_orders__element-order-date-${prod.id}` }>
              <p>{ prod.saleDate }</p>
            </div>
            <div data-testid={ `customer_orders__element-card-price-${prod.id}` }>
              <p>{ prod.price }</p>
            </div>
            <div data-testid={ `seller_orders__element-card-address-${prod.id}` }>
              <p>{ prod.address }</p>
            </div>
          </section>
        )) }
      </section>
    </main>
  );
}

export default CustomerProducts;
