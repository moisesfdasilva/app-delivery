import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import UserContext from '../../store/context/UserContext';

function Register() {
  // const history = useHistory();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    disabled: true,
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
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Register;
