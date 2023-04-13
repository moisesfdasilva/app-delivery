import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import UserProvider from '../../store/provider/UserProvider';
import api from '../../services/api';
import {
  inputValidMock,
  outputValidMock,
  inputInvalidMock,
  outInvalidMock,
} from '../mocks/RegisterMock';

describe('2. Testes da tela de Registro(Register):', () => {
  const inputNameTestId = 'common_register__input-name';
  const inputEmailTestId = 'common_register__input-email';
  const inputPasswordTestId = 'common_register__input-password';
  const registerButtonTestId = 'common_register__button-register';
  const logoutTestId = 'customer_products__element-navbar-link-logout';
  const invalidRegTextTestId = 'common_register__element-invalid_register';

  it(`2.1. Verificação do redirecionamento para a tela de produtos ao criar um cliente
  (customer), com nome, email e senha válidos.`, async () => {
    const mock = jest.spyOn(api, 'post');
    mock.mockImplementation(() => Promise.resolve(outputValidMock));

    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);
    history.push('/register');

    const inputName = screen.getByTestId(inputNameTestId);
    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const registerButton = screen.getByTestId(registerButtonTestId);

    userEvent.type(inputName, inputValidMock.name);
    userEvent.type(inputEmail, inputValidMock.email);
    userEvent.type(inputPassword, inputValidMock.password);
    userEvent.click(registerButton);

    await waitFor(() => screen
      .getByTestId(logoutTestId));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/customer/products');
  });

  it(`2.2. Verificação da exibição da mensagem "Você já possui um cadastro" ao cadastrar
  um email já cadastrado.`, async () => {
    const mock = jest.spyOn(api, 'post');
    mock.mockImplementation(() => Promise.resolve(outInvalidMock));

    const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);
    history.push('/register');

    const inputName = screen.getByTestId(inputNameTestId);
    const inputEmail = screen.getByTestId(inputEmailTestId);
    const inputPassword = screen.getByTestId(inputPasswordTestId);
    const registerButton = screen.getByTestId(registerButtonTestId);

    userEvent.type(inputName, inputInvalidMock.name);
    userEvent.type(inputEmail, inputInvalidMock.email);
    userEvent.type(inputPassword, inputInvalidMock.password);
    userEvent.click(registerButton);

    await waitFor(() => expect(screen.getByTestId(invalidRegTextTestId)).toBeDefined());
  });
});
