import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import ProductProvider from '../../store/provider/ProductProvider';
import api from '../../services/api';
import {
  outputOrderDetailsMock,
} from '../mocks/CustomerOrderDetailsMock';

describe(`6. Testes da tela de Detalhes das Ordens de Pedidos do Cliente(Customer
Order Details):`, () => {
  const totalPriceTestId = 'customer_order_details__element-order-total-price';
  const deliveryCheckTestId = 'customer_order_details__button-delivery-check';

  beforeEach(async () => {
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrderDetailsMock }));

    const { history } = renderWithRouter(
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>,
    );

    act(() => { history.push('/customer/orders/333'); });

    await waitFor(() => screen.getByTestId(totalPriceTestId));
  });

  it('6.1. Verificação do funcionamento do botão "MARCAR COMO ENTREGUE".', async () => {
    const deliveryCheck = screen.getByTestId(deliveryCheckTestId);
    userEvent.click(deliveryCheck);
  });
});
