import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../store/context/ProductContext';

function Cards({ price, urlImage, name, id }) {
  const { valorTotal, setValorTotal, addCar, removeCar } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name,
    price,
    quantity: 0,
  });

  const handleIncrement = () => {
    setProduct({ ...product, quantity: product.quantity + 1 });
    setValorTotal(valorTotal + price * 1);
    if (product.quantity === 0) {
      addCar({ ...product, quantity: 1 });
    } else {
      addCar(product);
    }
  };

  const handleDecrement = () => {
    if (product.quantity === 0) return;
    setProduct({ ...product, quantity: product.quantity - 1 });
    setValorTotal(valorTotal - price * 1);
    removeCar(product);
  };

  const handleChange = ({ target: { value } }) => {
    if (value === 0) return;
    setProduct({ ...product, quantity: value });
    setValorTotal(price * value);
    addCar(product);
  };

  return (
    <div className="ProductCard">

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
        name="nome_product"
      >
        { name }
      </p>

      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        height="60%"
        width="80%"
      />

      <p
        data-testid={ `customer_products__element-card-price-${id}` }
        name="preco"
      >
        { `R$ ${Number(price).toFixed(2).replace('.', ',')}` }
      </p>

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        name="diminuir_quat"
        onClick={ handleDecrement }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        name="quantidade"
        value={ product.quantity }
        onChange={ handleChange }
      />

      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        name="acrescentar_quant"
        onClick={ handleIncrement }
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
