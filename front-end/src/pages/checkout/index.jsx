import React, { useContext } from 'react';
import NavBar from '../../components/NavBar';
import TableElement from './components/tableElement';
import ProductContext from '../../store/context/ProductContext';

function Checkout() {
  const { sales, setSales } = useContext(ProductContext);

  const remove = (number) => {
    const index = number - 1;
    sales.splice(index, 1);
    console.log(sales);
    setSales(sales);
  };

  return (
    <div>
      <NavBar />
      <div>
        <h2>Finalizar Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitario</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            { sales.map((element, index) => (
              <TableElement
                key={ index }
                product={ element }
                number={ index + 1 }
                remove={ remove }
              />
            ))}
          </tbody>
        </table>
        <h3 data-testid="customer_checkout__element-order-total-price">Total: ...</h3>
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsavel
            <select id="seller" data-testid="customer_checkout__select-seller">
              <option value="josé">
                josé
              </option>
            </select>
          </label>
          <label
            htmlFor="address"
            data-testid="customer_checkout__input-address"
          >
            Endereço
            <input id="address" type="text" />
          </label>
          <label
            htmlFor="address-number"
            data-testid="customer_checkout__input-address-number"
          >
            Numero
            <input id="address-number" type="number" />
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
