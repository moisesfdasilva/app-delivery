import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import ProductProvider from '../../store/provider/ProductProvider';
import api from '../../services/api';
import {
  inputValidCustomerMock,
  outputValidCustomerMock,
  outputProductsMock,
  outputOrdersMock,
} from '../mocks/ProductsMock';

describe('3. Testes da tela de Produtos(Products):', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const logoutTestId = 'customer_products__element-navbar-link-logout';
  const ordersButtonTestId = 'customer_products__element-navbar-link-orders';
  const logoutButtonTestId = 'customer_products__element-navbar-link-logout';
  const removeButtonTestId = 'customer_products__button-card-rm-item-1';
  const addButtonTestId = 'customer_products__button-card-add-item-1';
  // const cartButtonTestId = 'customer_products__button-cart';

  beforeEach(async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputValidCustomerMock));
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputProductsMock }))
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrdersMock }));

    renderWithRouter(
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>,
    );

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputValidCustomerMock.email);
    userEvent.type(inputPassword, inputValidCustomerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId(logoutTestId));
  });

  it(`3.1. Verificação do redirecionamento para a tela das ordens de pedidos ao clicar no
  botão "Meus Pedidos".`, async () => {
    const navButtonOrders = screen.getByTestId(ordersButtonTestId);
    userEvent.click(navButtonOrders);
    const navButtonLogout = screen.getByTestId(logoutButtonTestId);
    userEvent.click(navButtonLogout);
  });

  it('3.2. Verificação da adição ou remoção de pedidos no carrinho de compras.', () => {
    const removeItemButton = screen.getByTestId(removeButtonTestId);
    const addItemButton = screen.getByTestId(addButtonTestId);
    const navButtonLogout = screen.getByTestId(logoutButtonTestId);

    userEvent.click(addItemButton);
    userEvent.click(removeItemButton);

    userEvent.click(navButtonLogout);
  });

  // it(`3.3. Verificação do redirecionamento para a tela de checkout ao clicar no botão
  // "Ver Carrinho".`, async () => {
  //   const addItemButton = screen.getByTestId(addButtonTestId);
  //   userEvent.click(addItemButton);
  //   userEvent.click(addItemButton);

  //   const cartButton = screen.getByTestId(cartButtonTestId);
  //   userEvent.click(cartButton);

  //   await waitFor(() => screen.getByTestId('customer_checkout__element-order-total-price'));
  // });
});
