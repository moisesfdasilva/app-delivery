import React, { useContext } from 'react';
import ProductContext from '../store/context/ProductContext';
import '../App.css';

function TotalProduct() {
  const { valorTotal } = useContext(ProductContext);

  return (
    <div className="ProductCard">
      <button
        data-testid="customer_products__button-cart"
        type="button"
      >
        <p>Ver Carrinho:</p>
        <p
          data-testid="customer_products__checkout-bottom-value"
        >

          { `${Number(valorTotal).toFixed(2).replace('.', ',')}` }

        </p>

      </button>
    </div>
  );
}

export default TotalProduct;
