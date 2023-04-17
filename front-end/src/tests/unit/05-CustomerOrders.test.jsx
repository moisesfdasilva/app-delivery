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
  outputOrderDetailsMock,
  localStorageUserMock,
} from '../mocks/CustomerOrdersMock';

describe('5. Testes da tela de Ordens do Cliente(Customer Orders):', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const logoutTestId = 'customer_products__element-navbar-link-logout';
  const ordersButtonTestId = 'customer_products__element-navbar-link-orders';
  const orderTestId = 'customer_orders__element-order-id-1';
  const totalPriceTestId = 'customer_order_details__element-order-total-price';

  beforeEach(async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputValidCustomerMock));
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputProductsMock }))
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrdersMock }))
      .mockImplementation(() => Promise.resolve({ data: outputOrderDetailsMock }));

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

    const ordersButton = screen.getByTestId(ordersButtonTestId);
    userEvent.click(ordersButton);

    const mockGetToLocalStorage = jest.spyOn(Storage.prototype, 'getItem');
    mockGetToLocalStorage.mockImplementation(() => localStorageUserMock);
    const mockGetToLocalStorageParse = jest.spyOn(JSON, 'parse');
    mockGetToLocalStorageParse.mockImplementation(() => localStorageUserMock);
    const mockArray = jest.spyOn(Object, 'values');
    mockArray.mockImplementation(() => outputOrdersMock.orders);
  });

  it(`5.1. Verificação do redirecionamento para a tela de detalhes da ordem de pedidos ao
  clicar na ordem.`, async () => {
    await waitFor(() => screen.getAllByText('Pedido'));
    const order = screen.getByTestId(orderTestId);
    userEvent.click(order);
    await waitFor(() => screen.getByTestId(totalPriceTestId));
  });
});
