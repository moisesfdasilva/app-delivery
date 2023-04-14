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

  beforeAll(async () => {
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

  it(`4.1. Verificação da remoção de um item do carrinho ao clicar no botão "Remover",
  na coluna "Remover Item".`, async () => {
    const removeButtons = screen.getAllByRole('button', { name: 'Remover' });

    userEvent.click(removeButtons[0]);

    const abc = screen.getAllByRole('option');
    userEvent.click(abc[2]);

    const inputAddress = screen
      .getByTestId('customer_checkout__input-address');
    userEvent.type(inputAddress, 'Avenida Principal');

    const inputAddressNumber = screen
      .getByTestId('customer_checkout__input-address-number');
    userEvent.type(inputAddressNumber, '1100');

    const finishButton = screen
      .getByTestId('customer_checkout__button-submit-order');
    userEvent.click(finishButton);
  });
});
