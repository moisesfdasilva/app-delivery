import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Cards({ price, urlImage, name, id }) {
  return (
    <div className="ProductCard">

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
        name="nome_product"
      >
        Titulo do produto
        { name }
      </p>

      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        height="80%"
        width="80%"
      />

      <p
        data-testid={ `customer_products__element-card-price-${id}` }
        name="preco"
      >
        R$
        { price }
      </p>

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        name="diminuir_quat"
        onClick={ () => {} }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        name="quantidade"
      />

      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        name="acrescentar_quant"
        onClick={ () => {} }
      >
        +
      </button>

    </div>
  );
}

Cards.propTypes = {
  urlImage: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default Cards;
