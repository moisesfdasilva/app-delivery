import React, { useContext } from 'react';
import NavBar from '../../components/NavBar';
import TableElement from './components/tableElement';
import ProductContext from '../../store/context/ProductContext';
import THead from './components/thead';
import Select from './components/select';

function Checkout() {
  const { sales, setSales } = useContext(ProductContext);

  const remove = (number) => {
    const index = number - 1;
    sales.splice(index, 1);
    console.log(sales);
    setSales(sales);
  };

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
          <Select
            id="saller"
            dataTest="customer_checkout__select-seller"
            options={ ['josé', 'ronaldo', 'pele'] }
          />
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
