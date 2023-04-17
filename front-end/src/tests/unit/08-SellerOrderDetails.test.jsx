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

describe(`8. Testes da tela de Detalhes das Ordens de Pedidos do Cliente(Seller
Order Details):`, () => {
  const headTableTestId = 'seller_order_details__element-order-details-label-order-id';
  const preperingCheckTestId = 'seller_order_details__button-preparing-check';
  const dispatchCheckTestId = 'seller_order_details__button-dispatch-check';

  beforeEach(async () => {
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementationOnce(() => Promise.resolve({ data: outputOrderDetailsMock }));
    const mockUpdate = jest.spyOn(api, 'put');
    mockUpdate
      .mockImplementationOnce(() => Promise.resolve('Preparando'))
      .mockImplementationOnce(() => Promise.resolve('Em Trânsito'));

    const { history } = renderWithRouter(
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>,
    );

    act(() => { history.push('/seller/orders/333'); });

    await waitFor(() => screen.getByTestId(headTableTestId));
  });

  it('8.1. Verificação do funcionamento do botão "MARCAR COMO ENTREGUE".', async () => {
    const preperingCheck = screen.getByTestId(preperingCheckTestId);
    const dispatchCheck = screen.getByTestId(dispatchCheckTestId);

    userEvent.click(preperingCheck);
    userEvent.click(dispatchCheck);
  });
});
