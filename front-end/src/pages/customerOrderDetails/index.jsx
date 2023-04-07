import React, { useState, useEffect } from 'react';
import TableOrdDetBody from '../../components/tableOrdDetBody';
import TableOrdDetHeader from '../../components/tableOrdDetHeader';
import api from '../../services/api';

function CustomerOrderDetail() {
  const [order, setOrder] = useState({
    loading: true,
  });

  useEffect(() => {
    async function getOrder() {
      // QUANDO CHEGAR NESSE REQUISITO AJUSTAR A ROTA COM O ID DINÂMICO
      const { data } = await api.get('/order/details/1');
      const newOrder = data.order;
      setOrder(newOrder);
    }
    getOrder();
  }, []);

  if (order.loading) { return <h1>LOADING...</h1>; }
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
          { order.user.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
      <section>
        <h1>Detalhe do Pedido</h1>
      </section>
      <table>
        <TableOrdDetHeader
          key={ order.id }
          id={ order.id }
          seller={ order.seller.name }
          saleDate={ order.saleDate }
          status={ order.status }
        />
        <tbody>
          { order.products.map(({ id, name, SalesProducts, price }) => (
            <TableOrdDetBody
              key={ id }
              id={ id }
              name={ name }
              quantity={ SalesProducts.quantity }
              price={ price }
            />
          )) }
        </tbody>
      </table>
      <section>
        <h1>{ order.totalPrice }</h1>
      </section>
    </>
  );
}

export default CustomerOrderDetail;
