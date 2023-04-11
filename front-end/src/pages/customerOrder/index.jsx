import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from '../../components/orderCard';
import api from '../../services/api';
import NavBar from '../../components/NavBar';

function CustomerOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      const userLocalStorage = localStorage.getItem('user');
      const userData = JSON.parse(userLocalStorage);
      const { id } = userData;
      const { data } = await api.get(`/order/customer/${id}`);
      const ordersData = Object.values(data.orders);
      setOrders(ordersData);
    }
    getAllOrders();
  }, []);

  const history = useHistory();
  const seller = (history.location.pathname).includes('seller');

  return (
    <main>
      <NavBar />
      <section>
        { orders.map((ord) => (
          <OrderCard
            key={ ord.id }
            id={ ord.id }
            status={ ord.status }
            saleDate={ ord.saleDate }
            totalPrice={ ord.totalPrice }
            address={ `${ord.deliveryAddress} - ${ord.deliveryNumber}` }
            seller={ seller }
          />
        )) }
      </section>
    </main>
  );
}

export default CustomerOrder;
