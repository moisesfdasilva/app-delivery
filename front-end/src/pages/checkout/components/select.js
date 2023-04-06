import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, dataTest, options }) {
  return (
    <label htmlFor={ id }>
      P. Vendedora Responsavel
      <select id={ id } data-testid={ dataTest }>
        { options
          .map((e, index) => <option key={ index } value={ e }>{ e }</option>)}
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.number.isRequired,
  dataTest: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
