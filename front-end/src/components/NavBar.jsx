import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function NavBar() {
  const [user, setUser] = useState({
    name: '',
  });

  const history = useHistory();

  const getUser = () => {
    const data = localStorage.getItem('user');
    const result = JSON.parse(data);
    setUser({ ...result });
  };

  const logout = () => {
    localStorage.removeItem('user');
    return history.push('/');
  };

  useEffect(() => getUser(), []);

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
        { user.name }
      </p>

      <Link
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ logout }
      >
        Sair
      </Link>

    </header>
  );
}

export default NavBar;
