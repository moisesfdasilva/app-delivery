import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from '../store/context/ProductContext';

function TotalProduct() {
  const history = useHistory();
  const { valorTotal, useCar } = useContext(ProductContext);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (valorTotal > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    localStorage.setItem('valorTotal', JSON.stringify(valorTotal.toFixed(2)));
    localStorage.setItem('carrinho', JSON.stringify(useCar));
  }, [valorTotal, useCar]);

  return (
    <div className="ProductCard">
      <button
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ btnDisabled }
        onClick={ () => history.push('/customer/checkout') }
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
