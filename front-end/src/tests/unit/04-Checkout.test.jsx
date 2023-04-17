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
  outputSellersMock,
  inputAddressMock,
} from '../mocks/CheckoutMock';

describe('4. Testes da tela de Produtos(Products):', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const logoutTestId = 'customer_products__element-navbar-link-logout';
  const add01ButtonTestId = 'customer_products__button-card-add-item-1';
  const add02ButtonTestId = 'customer_products__button-card-add-item-2';
  const cartButtonTestId = 'customer_products__button-cart';
  const totalPriceButtonTestId = 'customer_checkout__element-order-total-price';
  const logoutButtonTestId = 'customer_products__element-navbar-link-logout';
  const inputAddressTestId = 'customer_checkout__input-address';
  const inputAddNumbTestId = 'customer_checkout__input-address-number';
  const finishButtonTestId = 'customer_checkout__button-submit-order';

  beforeEach(async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputValidCustomerMock));
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputProductsMock }))
      .mockImplementation(() => Promise.resolve({ data: outputSellersMock }));

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

    const add01ItemButton = screen.getByTestId(add01ButtonTestId);
    const add02ItemButton = screen.getByTestId(add02ButtonTestId);

    const cartButton = screen.getByTestId(cartButtonTestId);

    userEvent.click(add01ItemButton);
    userEvent.click(add02ItemButton);
    userEvent.click(cartButton);

    await waitFor(() => screen.getByTestId(totalPriceButtonTestId));
  });

  it(`4.1. Verificação da retirada de um item do carrinho ao clicar no botão "Remover",
  na coluna "Remover Item".`, async () => {
    const removeButtons = screen.getAllByRole('button', { name: 'Remover' });
    const navButtonLogout = screen.getByTestId(logoutButtonTestId);

    userEvent.click(removeButtons[0]);
    userEvent.click(navButtonLogout);
  });

  it(`4.2. Verificação da fechamento do pedido ao preencher os inputs vendedor, endereço,
  número e clicar no botão "Finalizar Pedido".`, async () => {
    const allSellers = screen.getAllByRole('option');
    const inputAddress = screen.getByTestId(inputAddressTestId);
    const inputAddressNumber = screen.getByTestId(inputAddNumbTestId);
    const finishButton = screen.getByTestId(finishButtonTestId);

    userEvent.click(allSellers[1]);
    userEvent.type(inputAddress, inputAddressMock.address);
    userEvent.type(inputAddressNumber, inputAddressMock.number);
    userEvent.click(finishButton);
  });
});
