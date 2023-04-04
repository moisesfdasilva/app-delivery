import React from 'react';
import PropTypes from 'prop-types';

function TbCustOrdDetBody({ id, name, qt, cost, totalCost }) {
  return (
    <tr>
      <td data-testid={ `customer_order_details__element-order-table-item-number-${id}` }>
        { id }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-name-${id}` }>
        { name }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-quantity-${id}` }>
        { qt }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }>
        { cost }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }>
        { totalCost }
      </td>
    </tr>
  );
}

TbCustOrdDetBody.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  qt: PropTypes.number,
  cost: PropTypes.string,
  totalCost: PropTypes.string,
}.isRequired;

export default TbCustOrdDetBody;
