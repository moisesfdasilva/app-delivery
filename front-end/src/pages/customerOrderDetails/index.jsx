import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TableOrdDetBody from '../../components/tableOrdDetBody';
import TableOrdDetHeader from '../../components/tableOrdDetHeader';
import api from '../../services/api';

function CustomerOrderDetails() {
  const history = useHistory();
  const [order, setOrder] = useState({
    loading: true,
  });

  useEffect(() => {
    async function getOrder() {
      const id = (history.location.pathname).replace('/customer/orders/', '');
      const { data } = await api.get(`/order/details/${id}`);
      const newOrder = data.order;
      setOrder(newOrder);
    }
    getOrder();
  }, []);

  const seller = (history.location.pathname).includes('seller');

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
          sellerName={ order.seller.name }
          saleDate={ order.saleDate }
          status={ order.status }
          seller={ seller }
        />
        <tbody>
          { order.products.map(({ id, name, SalesProducts, price }) => (
            <TableOrdDetBody
              key={ id }
              id={ id }
              name={ name }
              quantity={ SalesProducts.quantity }
              price={ price }
              seller={ seller }
            />
          )) }
        </tbody>
      </table>
      <section>
        <h1 data-testid="customer_order_details__element-order-total-price">
          { Number(order.totalPrice)
            .toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }
        </h1>
      </section>
    </>
  );
}

export default CustomerOrderDetails;
