import React from 'react';
import PropTypes from 'prop-types';

function TableElement({ product, number, remove }) {
  const { name, quantity, unitPrice, subTotal } = product;

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${number}` }
      >
        { number }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${number}` }
      >
        { name }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${number}` }
      >
        { quantity }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${number}` }
      >
        { unitPrice }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${number}` }
      >
        { subTotal }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${number}` }
      >
        <button type="button" onClick={ remove }>
          Remover
        </button>
      </td>
    </tr>
  );
}

TableElement.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TableElement;
