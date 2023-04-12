import React from 'react';
import PropTypes from 'prop-types';

function TableElement({ product, number }) {
  const { name, email, role, remove } = product;

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${number}` }
      >
        { number + 1 }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${number}` }
      >
        { name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${number}` }
      >
        { email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${number}` }
      >
        { role }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-remove-${number}` }
      >
        <button type="button" onClick={ () => remove() }>
          Remover
        </button>
      </td>
    </tr>
  );
}

TableElement.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default TableElement;
