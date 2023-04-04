import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
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
