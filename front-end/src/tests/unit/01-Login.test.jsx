import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';

describe('1. Testes da tela de Login:', () => {
  it(`1.1. Verificação do redirecionamento para a página de produtos ao logar como cliente(customer),
  com email e senha válidas.`, async () => {
    const { history } = renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>
    );

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');

    userEvent.type(inputEmail, 'zebirita@email.com');
    userEvent.type(inputPassword, '$#zebirita#$');
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId('customer_products__element-navbar-link-logout'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/customer/products');
  });

  it(`1.2. Verificação do redirecionamento para a página de ordens de pedidos ao logar como
  vendedor(seller), com email e senha válidas.`, async () => {
    const { history } = renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>
    );

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');

    userEvent.type(inputEmail, 'fulana@deliveryapp.com');
    userEvent.type(inputPassword, 'fulana@123');
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId('customer_products__element-navbar-link-logout'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/seller/orders');
  });

  it(`1.3. Verificação da apresentação da mensagem "Usuario não cadastrado" ao logar com email e 
  senha inválidas.`, async () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');

    userEvent.type(inputEmail, 'dick@vigarista.com');
    userEvent.type(inputPassword, '$#vigarista#$');
    userEvent.click(loginButton);

    await waitFor(() => 
      expect(screen.getByTestId('common_login__element-invalid-email')).toBeDefined()
    );
  });
});