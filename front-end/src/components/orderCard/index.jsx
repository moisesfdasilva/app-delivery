import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function OrderCard({ id, status, saleDate, totalPrice, address, seller }) {
  const route = seller ? 'seller' : 'customer';
  return (
    <Link
      to={ `/${route}/orders/${id}` }
    >
      <div data-testid={ `${route}_orders__element-order-id-${id}` }>
        <p>Pedido</p>
        <p>{ id }</p>
      </div>
      <div data-testid={ `${route}_orders__element-delivery-status-${id}` }>
        <p>{ status }</p>
      </div>
      <div data-testid={ `${route}_orders__element-order-date-${id}` }>
        <p>{ saleDate }</p>
      </div>
      <div data-testid={ `${route}_orders__element-card-price-${id}` }>
        <p>{ totalPrice }</p>
      </div>
      { seller && (
        <div data-testid={ `seller_orders__element-card-address-${id}` }>
          <p>{ address }</p>
        </div>
      ) }
    </Link>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
  address: PropTypes.string,
  seller: PropTypes.bool,
}.isRequired;

export default OrderCard;
