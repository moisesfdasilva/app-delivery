import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, dataTest, options, label, state }) {
  const { set, value } = state;

  return (
    <label htmlFor={ id }>
      { label }
      <select
        onChange={ (e) => set(e.target.value) }
        value={ value }
        id={ id }
        data-testid={ dataTest }
      >
        <option value={ 0 } defaultValue disabled hidden>Selecione um vendedor(a)</option>
        { options
          .map((e, index) => <option key={ index } value={ e.id }>{ e.name }</option>)}
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  state: PropTypes.shape({
    set: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
