import React from 'react';
import PropTypes from 'prop-types';

function TableOrdDetBody({ id, name, quantity, price }) {
  const totalCost = quantity * Number(price);
  return (
    <tr>
      <td data-testid={ `customer_order_details__element-order-table-item-number-${id}` }>
        { id }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-name-${id}` }>
        { name }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-quantity-${id}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }>
        { price }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }>
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
}.isRequired;

export default TableOrdDetBody;
