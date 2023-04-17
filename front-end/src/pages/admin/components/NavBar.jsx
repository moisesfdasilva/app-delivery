import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
      <button
        // onClick={ () => history.push('/customer/products') }
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        Gerenciar Usuários
      </button>

      <p data-testid="customer_products__element-navbar-user-full-name">
        { user.name }
      </p>

      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ logout }
      >
        Sair
      </button>

    </header>
  );
}

export default NavBar;
