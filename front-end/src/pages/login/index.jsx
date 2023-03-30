import React, { useState, useEffect } from 'react';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    disabled: true,
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

  useEffect(() => handleValidation(), [form.email, form.password]);

  // const handleSubmit = () => {
  //   const objectEmail = {
  //     email: form.email,
  //   };
  //   localStorage.setItem('user', JSON.stringify(objectEmail));
  //   history.push('/meals');
  // };

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
          // onClick={ handleSubmit }
          disabled={ form.disabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;
