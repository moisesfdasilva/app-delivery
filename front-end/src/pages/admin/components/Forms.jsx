import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/Select';

function Forms({ handleRegister }) {
  const [useDisabled, setDisabled] = useState(true);
  const [useNotRgister, setNotRegister] = useState(false);
  const [useForm, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const selectRole = (value) => {
    setForm({ ...useForm, role: value });
  };

  const options = [
    {
      id: 'seller',
      name: 'Vendedor',
    },
    {
      id: 'customer',
      name: 'Cliente',
    },
    {
      id: 'administrator',
      name: 'Administrator',
    },
  ];

  const handleChange = ({ target: { value, id } }) => {
    setForm({ ...useForm, [id]: value });
  };

  const handleValidation = () => {
    const regex = /\S+@\S+\.\S+/;
    const minLengthPassword = 5;
    const minLengthName = 11;
    const verifyEmail = useForm.email && regex.test(useForm.email);
    if (
      verifyEmail
      && useForm.password.length > minLengthPassword
      && useForm.name.length > minLengthName
      && useForm.role !== ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    handleValidation();
  }, [useForm]);

  return (
    <div>
      Cadastrar novo usuário
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            onChange={ handleChange }
            value={ useForm.name }
            type="text"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            onChange={ handleChange }
            value={ useForm.email }
            type="email"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            onChange={ handleChange }
            value={ useForm.password }
            type="password"
            data-testid="admin_manage__input-password"
          />
        </label>
        <Select
          id="role"
          dataTest="admin_manage__select-role"
          options={ options }
          type=""
          state={ { set: selectRole, value: useForm.role } }
          label="Tipo"
        />
        <button
          data-testid="admin_manage__button-register"
          disabled={ useDisabled }
          onClick={ () => handleRegister(useForm, setNotRegister) }
          type="button"
        >
          Cadastrar
        </button>
      </form>
      { useNotRgister && (
        <p data-testid="admin_manage__element-invalid-register">
          não foi possivel cadastrar usuario
        </p>
      )}
    </div>
  );
}

Forms.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default Forms;
