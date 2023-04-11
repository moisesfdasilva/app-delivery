import React from 'react';
import PropTypes from 'prop-types';

function TableOrdDetHeader({ id, sellerName, saleDate, status, seller }) {
  const route = seller ? 'seller' : 'customer';
  const testId = `${route}_order_details__element-order-details-label-`;
  const testIdButton = testId.replace('element-order-details-label-', 'button');
  const newSaleDate = new Date(saleDate);

  return (
    <thead>
      <tr>
        <th data-testid={ `${testId}order-id` }>
          { `PEDIDO ${id}` }
        </th>
        { !seller && (
          <th data-testid={ `${testId}seller-name` }>
            { `P. Vend: ${sellerName}` }
          </th>
        ) }
        <th data-testid={ `${testId}order-date` }>
          { newSaleDate.toLocaleDateString('en-GB') }
        </th>
        <th
          data-testid={ `${testId}delivery-status-${id}` }
        >
          { status }
        </th>
        { seller && (
          <th data-testid="seller_order_details__button-preparing-check">
            PREPARAR PEDIDO
          </th>
        ) }
        { !seller && (
          <th>
            <button
              data-testid={ `${testIdButton}-delivery-check` }
              type="button"
              disabled
            >
              MARCAR COMO ENTREGUE
            </button>
          </th>
        ) }
        { seller && (
          <th data-testid="seller_order_details__button-dispatch-check">
            SAIU PARA ENTREGA
          </th>
        ) }
      </tr>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
  );
}

TableOrdDetHeader.propTypes = {
  id: PropTypes.number,
  sellerName: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
  seller: PropTypes.bool,
}.isRequired;

export default TableOrdDetHeader;
