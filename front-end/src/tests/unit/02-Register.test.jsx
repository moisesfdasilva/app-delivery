import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';

describe('2. Testes da tela de Registro(Register):', () => {
  it(`2.1. Verificação do redirecionamento para a tela de produtos ao criar um cliente
  (customer), com nome, email e senha válidos.`, async () => {
    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);
    history.push('/register');

    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const registerButton = screen.getByTestId('common_register__button-register');

    userEvent.type(inputName, 'Novo Sr.Zebirita');
    userEvent.type(inputEmail, 'novosrzebirita@email.com');
    userEvent.type(inputPassword, '$#anovosrzebirita#$');
    userEvent.click(registerButton);

    await waitFor(() => screen
      .getByTestId('customer_products__element-navbar-link-logout'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/customer/products');
  });
});
