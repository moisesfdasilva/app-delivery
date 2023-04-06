import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TableOrdDetBody from '../../components/tableOrdDetBody';
import TableOrdDetHeader from '../../components/tableOrdDetHeader';
import api from '../../services/api';

function SellerOrderDetails() {
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

  const history = useHistory();
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
        <h1 data-testid="seller_order_details__element-order-total-price">
          { order.totalPrice }
        </h1>
      </section>
    </>
  );
}

export default SellerOrderDetails;
