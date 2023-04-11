import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

function TableOrdDetHeader({ id, sellerName, saleDate, status, seller }) {
  const route = seller ? 'seller' : 'customer';
  const testId = `${route}_order_details__element-order-details-label-`;
  const testIdButton = testId.replace('element-order-details-label-', 'button');
  const saleDataStandard = new Date(saleDate);

  const [order, setOrder] = useState({
    status: '',
  });

  useEffect(() => setOrder({ status }), []);

  function updateOrder(statusOrder) {
    api.put('/sale/status', { id, status: statusOrder });
    setOrder({ status: statusOrder });
  }

  function setStatusOrder({ target }) {
    const { name } = target;
    switch (name) {
    case 'preparing-check':
      updateOrder('Preparando');
      break;
    case 'dispatch-check':
      updateOrder('Em Trânsito');
      break;
    case 'delivery-check':
      updateOrder('Entregue');
      break;
    default:
      console.log('PARAMETRO NÂO ENCONTRADO!');
    }
  }

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
          { saleDataStandard.toLocaleDateString('en-GB') }
        </th>
        <th
          data-testid={ `${testId}delivery-status-${id}` }
        >
          { order.status }
        </th>
        { seller && (
          <th>
            <button
              name="preparing-check"
              data-testid={ `${testIdButton}-preparing-check` }
              type="button"
              onClick={ setStatusOrder }
              disabled={ order.status !== 'Pendente' }
            >
              PREPARAR PEDIDO
            </button>
          </th>
        ) }
        { !seller && (
          <th>
            <button
              name="delivery-check"
              data-testid={ `${testIdButton}-delivery-check` }
              type="button"
              onClick={ setStatusOrder }
              disabled={ order.status !== 'Em Trânsito' }
            >
              MARCAR COMO ENTREGUE
            </button>
          </th>
        ) }
        { seller && (
          <th>
            <button
              name="dispatch-check"
              data-testid={ `${testIdButton}-dispatch-check` }
              type="button"
              onClick={ setStatusOrder }
              disabled={ order.status !== 'Preparando' }
            >
              SAIU PARA ENTREGA
            </button>
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
