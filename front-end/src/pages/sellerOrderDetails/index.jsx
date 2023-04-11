import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TableOrdDetBody from '../../components/tableOrdDetBody';
import TableOrdDetHeader from '../../components/tableOrdDetHeader';
import api from '../../services/api';
import NavBar from '../../components/NavBar';

function SellerOrderDetails() {
  const history = useHistory();
  const [order, setOrder] = useState({
    loading: true,
  });

  useEffect(() => {
    async function getOrder() {
      const id = (history.location.pathname).replace('/seller/orders/', '');
      const { data } = await api.get(`/order/details/${id}`);
      const orderData = data.order;
      setOrder(orderData);
    }
    getOrder();
  }, []);

  const seller = (history.location.pathname).includes('seller');

  if (order.loading) { return <h1>LOADING...</h1>; }
  return (
    <>
      <NavBar />
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
          { Number(order.totalPrice)
            .toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }
        </h1>
      </section>
    </>
  );
}

export default SellerOrderDetails;
