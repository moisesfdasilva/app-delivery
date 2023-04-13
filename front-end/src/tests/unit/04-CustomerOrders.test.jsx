// import React from 'react';
// import { screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from '../renderWithRouter';
// import App from '../../App';
// import UserProvider from '../../store/provider/UserProvider';
// import api from '../../services/api';
// import {
//   inputValidMock,
// } from '../mocks/RegisterMock';

describe('3. Testes da tela de Ordens do Cliente(Customer Orders):', () => {
  // const inputNameTestId = 'common_register__input-name';
  // const inputEmailTestId = 'common_register__input-email';
  // const inputPasswordTestId = 'common_register__input-password';
  // const registerButtonTestId = 'common_register__button-register';
  // const logoutTestId = 'customer_products__element-navbar-link-logout';

  // afterEach(() => cleanUpDatabase(globalDatabase));

  it(`3.1. Verificação do redirecionamento para a tela de produtos ao criar um cliente
  (customer), com nome, email e senha válidos.`, async () => {
    // const mock = jest.spyOn(api, 'post');
    // mock.mockImplementation(() => Promise
    //   .resolve({ data: { token: true, user: { dataValues: 'DADOS DO USUÁRIO' } } }));

    // const { history } = renderWithRouter(<UserProvider><App /></UserProvider>);
    // history.push('/register');

    // const inputName = screen.getByTestId(inputNameTestId);
    // const inputEmail = screen.getByTestId(inputEmailTestId);
    // const inputPassword = screen.getByTestId(inputPasswordTestId);
    // const registerButton = screen.getByTestId(registerButtonTestId);

    // userEvent.type(inputName, inputValidMock.name);
    // userEvent.type(inputEmail, inputValidMock.email);
    // userEvent.type(inputPassword, inputValidMock.password);
    // userEvent.click(registerButton);

    // await waitFor(() => screen
    //   .getByTestId(logoutTestId));

    // const { location: { pathname } } = history;
    // expect(pathname).toBe('/customer/products');
  });
});
