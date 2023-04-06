import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../store/context/UserContext';
import api from '../../services/api';

function Register() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    disabled: true,
    userFound: false,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleValidation = () => {
    const regex = /\S+@\S+\.\S+/;
    const minLength = 6;
    const nameMinLength = 12;
    const verifyName = form.name.trim().length > nameMinLength;
    const verifyEmail = form.email && regex.test(form.email);
    if (verifyEmail && form.password.length >= minLength && verifyName) {
      setForm((prevState) => ({ ...prevState, disabled: false }));
    } else {
      setForm((prevState) => ({ ...prevState, disabled: true }));
    }
  };

  useEffect(() => handleValidation(), [form.name, form.email, form.password]);

  const handleRegister = async () => {
    const { name, email, password } = form;

    try {
      const { data } = await api.post('/register', { name, email, password });
      if (data.token) {
        localStorage.setItem('user', JSON.stringify({ ...data.user }));
        setUser({ ...data.user });
        history.push('/customer/products');
      } else {
        setForm((prevState) => ({ ...prevState, userFound: true }));
      }
    } catch (error) {
      setForm((prevState) => ({ ...prevState, userFound: true }));
    }
  };

  return (
    <div>
      <h2>CADASTRO</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input
            value={ form.name }
            type="name"
            name="name"
            placeholder="name"
            data-testid="common_register__input-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={ form.email }
            type="email"
            name="email"
            placeholder="email"
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ form.disabled }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>
      </form>
      {form.userFound
      && (
        <p data-testid="common_register__element-invalid_register">
          Você já possui um cadastro
        </p>
      )}
    </div>
  );
}

export default Register;
