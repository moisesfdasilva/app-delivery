import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import api from '../../services/api';
import {
  inputAdminSellerMock,
  outputValidAdminMock,
  outputUsersMock,
  newUserMock,
} from '../mocks/AdminMock';

describe('9. Testes da tela do Administrador(Admin):', () => {
  const inputEmailTestId = 'common_login__input-email';
  const inputPasswordTestId = 'common_login__input-password';
  const loginButtonTestId = 'common_login__button-login';
  const navLinkOrderTestId = 'customer_products__element-navbar-link-orders';
  const admInputNameTestId = 'admin_manage__input-name';
  const admInputEmailTestId = 'admin_manage__input-email';
  const admInputPassTestId = 'admin_manage__input-password';
  const admButtonRegisterTestId = 'admin_manage__button-register';

  beforeEach(async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputValidAdminMock));
    const mockPage = jest.spyOn(api, 'get');
    mockPage
      .mockImplementation(() => Promise.resolve({ data: outputUsersMock }));

    renderWithRouter(
      <UserProvider>
        <App />
      </UserProvider>,
    );

    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const loginButton = screen.getByTestId(loginButtonTestId);

    userEvent.type(inputEmail, inputAdminSellerMock.email);
    userEvent.type(inputPassword, inputAdminSellerMock.password);
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId(navLinkOrderTestId));
  });

  it(`9.1. Verificação da criação de um registro de um novo usuário na tela
  do administrador.`, async () => {
    const admInputName = screen.getByTestId(admInputNameTestId);
    const admInputEmail = screen.getByTestId(admInputEmailTestId);
    const admInputPass = screen.getByTestId(admInputPassTestId);
    const admSelectRole = screen.getAllByRole('option');
    const admButtonRegister = screen.getByTestId(admButtonRegisterTestId);

    userEvent.type(admInputName, newUserMock.name);
    userEvent.type(admInputEmail, newUserMock.email);
    userEvent.type(admInputPass, newUserMock.password);
    userEvent.click(admSelectRole[1]);
    userEvent.click(admButtonRegister);
  });

  it(`9.2. Verificação da remoção de um registro de um usuário cadastrado na tela
  do administrador.`, async () => {
    const removeButtons = screen.getAllByRole('button', { name: 'Remover' });

    userEvent.click(removeButtons[1]);
  });
});
