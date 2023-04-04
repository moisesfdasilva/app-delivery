import React from 'react';
import '../App.css';

function NavBar() {
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
