import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from '../../components/orderCard';
import api from '../../services/api';
import UserContext from '../../store/context/UserContext';

function CustomerOrder() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getAllOrders() {
      const userLocalStorage = localStorage.getItem('user');
      const userData = JSON.parse(userLocalStorage);
      const { id } = userData;

      const { data } = await api.get(`/order/${id}`);
      const newOrders = Object.values(data.orders);
      setOrders(newOrders);
    }
    getAllOrders();
  }, []);

  const history = useHistory();
  const seller = (history.location.pathname).includes('seller');

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
          { user.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
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
