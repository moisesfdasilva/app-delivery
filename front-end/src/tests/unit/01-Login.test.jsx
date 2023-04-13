import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import api from '../../services/api';
import {
  inputValidCustomerMock,
  outputValidCustomerMock,
  inputValidSellerMock,
  outputValidSellerMock,
  inputInvalidCustomerMock,
  outputInvalidCustomerMock,
} from '../mocks/LoginMock';

describe('1. Testes da tela de Login:', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const invalidTextTestId = 'common_login__element-invalid-email';
  const logoutTestId = 'customer_products__element-navbar-link-logout';
  const loginRegisterTestId = 'common_login__button-register';
  const registerTestId = 'common_register__button-register';

  it(`1.1. Verificação do redirecionamento para a tela de produtos ao logar como cliente
  (customer), com email e senha válidos.`, async () => {
    const mock = jest.spyOn(api, 'post');
    mock.mockImplementation(() => Promise.resolve(outputValidCustomerMock));

    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputValidCustomerMock.email);
    userEvent.type(inputPassword, inputValidCustomerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId(logoutTestId));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/customer/products');
  });

  it(`1.2. Verificação do redirecionamento para a tela de registro ao clicar no botão
  "Ainda não tenho conta".`, async () => {
    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);

    const registerButton = screen.getByTestId(loginRegisterTestId);

    userEvent.click(registerButton);

    await waitFor(() => screen.getByTestId(registerTestId));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/register');
  });

  it(`1.3. Verificação da exibição da mensagem "Usuario não cadastrado" ao logar com
  email e senha inválidos.`, async () => {
    const mock = jest.spyOn(api, 'post');
    mock.mockImplementation(() => Promise.resolve(outputInvalidCustomerMock));

    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputInvalidCustomerMock.email);
    userEvent.type(inputPassword, inputInvalidCustomerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => expect(screen.getByTestId(invalidTextTestId)).toBeDefined());
  });

  it(`1.4. Verificação do redirecionamento para a tela de ordens de pedidos ao logar como
  vendedor(seller), com email e senha válidos.`, async () => {
    const mock = jest.spyOn(api, 'post');
    mock.mockImplementation(() => Promise.resolve(outputValidSellerMock));

    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputValidSellerMock.email);
    userEvent.type(inputPassword, inputValidSellerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId(logoutTestId));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/seller/orders');
  });
});
