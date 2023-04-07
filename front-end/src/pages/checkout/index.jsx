import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import TableElement from './components/tableElement';
import THead from './components/thead';
import Select from './components/select';

function Checkout() {
  const carShop = JSON.parse(localStorage.getItem('carrinho'));
  const valorTotal = JSON.parse(localStorage.getItem('valorTotal'));
  const [car, setCar] = useState(carShop);

  function remove(number, subTotal) {
    const removeProduct = car.filter((_e, index) => index !== number);
    const valorFinal = Number(valorTotal) - subTotal;
    localStorage.setItem('valorTotal', JSON.stringify(valorFinal.toFixed(2)));
    localStorage.setItem('carrinho', JSON.stringify(removeProduct));
    setCar(removeProduct);
  }

  const header = ['Item', 'Descrição', 'Quantidade',
    'Valor Unitario', 'Sub-total', 'Remover Item'];

  return (
    <div>
      <NavBar />
      <div>
        <h2>Finalizar Pedidos</h2>
        <table>
          <THead header={ header } />
          <tbody>
            { car.map((element, index) => (
              <TableElement
                key={ index }
                product={ { ...element, remove } }
                number={ index }
              />
            ))}
          </tbody>
        </table>
        <h3 data-testid="customer_checkout__element-order-total-price">
          { `${Number(valorTotal).toFixed(2).replace('.', ',')}` }
        </h3>
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <Select
            id="saller"
            dataTest="customer_checkout__select-seller"
            options={ ['josé', 'ronaldo', 'pele'] }
            label="P. Vendedora Responsavel"
          />
          <label
            htmlFor="address"
          >
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              id="address"
              type="text"
            />
          </label>
          <label
            htmlFor="address-number"
          >
            Numero
            <input
              data-testid="customer_checkout__input-address-number"
              id="address-number"
              type="number"
            />
          </label>
          <button data-testid="customer_checkout__button-submit-order" type="button">
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
