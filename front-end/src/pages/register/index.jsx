import React from 'react';

function Register() {
  return (
    <div>
      <h2>CADASTRO</h2>
      <form>
        <label htmlFor="name">
          Password:
          <input
            // value={ form.name }
            type="name"
            name="name"
            placeholder="name"
            data-testid="common_register__input-name"
            // onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            // value={ form.email }
            type="email"
            name="email"
            placeholder="email"
            data-testid="common_register__input-email"
            // onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            // value={ form.password }
            type="password"
            name="password"
            placeholder="password"
            data-testid="common_register__input-password"
            // onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        //   disabled={ form.disabled }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Register;
