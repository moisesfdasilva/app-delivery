import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../store/context/UserContext';
import api from '../../services/api';

function Login() {
  const history = useHistory();

  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
    disabled: true,
    userNotFound: false,
  });

  const handleValidation = () => {
    const regex = /\S+@\S+\.\S+/;
    const minLength = 5;
    const verifyEmail = form.email && regex.test(form.email);
    if (verifyEmail && form.password.length > minLength) {
      setForm((prevState) => ({ ...prevState, disabled: false }));
    } else {
      setForm((prevState) => ({ ...prevState, disabled: true }));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const redirect = (role) => {
    switch (role) {
    case 'customer':
      return history.push('/customer/products');
    default:
      return history.push('/');
    }
  };

  const login = () => {
    const { email, password } = form;
    api.post('/user', { email, password })
      .then((response) => {
        const { user } = response.data;
        console.log(user);
        setUser({ ...user.dataValues });
        redirect(user.dataValues.role);
      }).catch(({ response }) => {
        console.log(response);
        setForm((prevState) => ({ ...prevState, userNotFound: true }));
      });
  };

  useEffect(() => handleValidation(), [form.email, form.password]);

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email:
          <input
            value={ form.email }
            type="email"
            name="email"
            placeholder="email"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={ form.password }
            type="password"
            name="password"
            placeholder="password"
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ form.disabled }
          onClick={ login }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      { form.userNotFound && (
        <p data-testid="common_login__element-invalid-email">
          Usuario não cadastrado
        </p>
      )}
    </div>
  );
}

export default Login;
