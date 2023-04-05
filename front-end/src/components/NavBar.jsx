import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function NavBar() {
  const history = useHistory();
  return (
    <header className="Navbar">
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        Produtos
      </button>

      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        onClick={ () => history.push('/customer/orders') }
      >
        Meus Pedidos
      </button>

      <p data-testid="customer_products__element-navbar-user-full-name">
        Cliente
      </p>

      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>

    </header>
  );
}

export default NavBar;
