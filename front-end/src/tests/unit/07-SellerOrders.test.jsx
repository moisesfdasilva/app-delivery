import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import api from '../../services/api';
import {
  inputValidSellerMock,
  outputValidSellerMock,
  outputOrdersMock,
  outputOrderDetailsMock,
} from '../mocks/SellerOrdersMock';

describe('7. Testes da tela de Ordens de Pedidos do Vendedor(SellerOrder):', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const orderTestId = 'seller_orders__element-order-id-1';
  const totalPriceTestId = 'seller_order_details__element-order-total-price';

  beforeEach(async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputValidSellerMock));
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrdersMock }))
      .mockImplementation(() => Promise.resolve({ data: outputOrderDetailsMock }));

    renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>,
    );

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputValidSellerMock.email);
    userEvent.type(inputPassword, inputValidSellerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => screen.getAllByText('PEDIDOS'));
  });

  it(`7.1. Verificação do redirecionamento para a tela de detalhes da ordem de pedidos ao
  clicar na ordem.`, async () => {
    const order = screen.getByTestId(orderTestId);
    userEvent.click(order);
    await waitFor(() => screen.getByTestId(totalPriceTestId));
  });
});
