import React from 'react';
import PropTypes from 'prop-types';

function TableOrdDetBody({ id, name, quantity, price, seller }) {
  const route = seller ? 'seller' : 'customer';
  const testId = `${route}_order_details__element-order-table-`;
  const totalCost = quantity * Number(price);
  return (
    <tr>
      <td data-testid={ `${testId}item-number-${id}` }>
        { id }
      </td>
      <td data-testid={ `${testId}name-${id}` }>
        { name }
      </td>
      <td data-testid={ `${testId}quantity-${id}` }>
        { quantity }
      </td>
      <td data-testid={ `${testId}unit-price-${id}` }>
        { price }
      </td>
      <td data-testid={ `${testId}sub-total-${id}` }>
        { totalCost }
      </td>
    </tr>
  );
}

TableOrdDetBody.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  seller: PropTypes.bool,
}.isRequired;

export default TableOrdDetBody;
