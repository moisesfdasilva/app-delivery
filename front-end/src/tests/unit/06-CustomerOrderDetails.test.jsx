import { screen, waitFor, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import ProductProvider from '../../store/provider/ProductProvider';
import api from '../../services/api';
import {
  outputOrderDetailsMock,
} from '../mocks/CustomerOrdersMock';

describe(`6. Testes da tela de Detalhes das Ordens de Pedidos do Cliente(Customer
Order Details):`, () => {
  const totalPriceTestId = 'customer_order_details__element-order-total-price';

  beforeEach(async () => {
    const { history } = renderWithRouter(
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>,
    );

    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrderDetailsMock }));

    act(() => { history.push('/customer/orders/333'); });

    await waitFor(() => screen.getByTestId(totalPriceTestId));
  });

  it(`6.1. Verificação do redirecionamento para a tela de detalhes da ordem de pedidos ao
  clicar na ordem.`, async () => {
    // await waitFor(() => screen.getAllByText('Pedido'));
    // const order = screen.getByTestId(orderTestId);
    // userEvent.click(order);
    // await waitFor(() => screen.getByTestId(totalPriceTestId));
  });
});
