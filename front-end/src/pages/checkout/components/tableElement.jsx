import React from 'react';
import PropTypes from 'prop-types';

function TableElement({ product, number }) {
  const { name, quantity, price, remove } = product;
  const subTotal = Number(price) * quantity;

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${number}` }
      >
        { number + 1 }
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
        { `${Number(price).toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${number}` }
      >
        { `${subTotal.toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${number}` }
      >
        <button type="button" onClick={ () => remove(number, subTotal) }>
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
    price: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default TableElement;
