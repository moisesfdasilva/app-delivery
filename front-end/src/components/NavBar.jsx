import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../App.css';

function NavBar() {
  const history = useHistory();
  return (
    <header className="Navbar">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        Produtos
      </Link>

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

      <Link
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        to="/"
      >
        Sair
      </Link>

    </header>
  );
}

export default NavBar;
