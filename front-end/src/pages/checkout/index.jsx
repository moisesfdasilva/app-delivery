import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import TableElement from './components/tableElement';
import THead from './components/thead';
import Select from './components/select';
import getAllSellers from '../../services/user.service';
import sendSale from '../../services/sale.service';

function Checkout() {
  const carShop = JSON.parse(localStorage.getItem('carrinho'));
  const valorTotal = JSON.parse(localStorage.getItem('valorTotal'));
  const user = JSON.parse(localStorage.getItem('user'));

  const [car, setCar] = useState(carShop);
  const [sellers, setSellers] = useState([]);
  const [useDisabled, setDisabled] = useState(true);
  const [sale, setSale] = useState({
    userId: user.id,
    sellerId: 0,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
  });

  const history = useHistory();

  function remove(number, subTotal) {
    const removeProduct = car.filter((_e, index) => index !== number);
    const valorFinal = Number(valorTotal) - subTotal;
    localStorage.setItem('valorTotal', JSON.stringify(valorFinal.toFixed(2)));
    localStorage.setItem('carrinho', JSON.stringify(removeProduct));
    setCar(removeProduct);
  }

  const addSeller = (value) => {
    setSale({ ...sale, sellerId: Number(value) });
  };

  const handleChange = ({ target: { value, id } }) => {
    setSale({ ...sale, [id]: value });
  };

  const handleCheck = () => {
    const { sellerId, deliveryNumber, deliveryAddress } = sale;
    if (sellerId !== 0 && deliveryAddress.length >= 1 && deliveryNumber.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleOnClick = async () => {
    const newSale = await sendSale({
      ...sale,
      totalPrice: Number(valorTotal),
    }, carShop, user.token);
    console.log(carShop);
    history.push(`/customer/orders/${newSale.id}`);
    console.log(newSale);
  };

  useEffect(() => {
    async function get() {
      const result = await getAllSellers();
      setSellers(result);
    }
    get();
  }, []);

  useEffect(() => handleCheck(), [sale.sellerId, sale.deliveryNumber, sale.deliveryAddress]);

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
            options={ sellers }
            state={ { set: addSeller, value: sale.sellerId } }
            label="P. Vendedora Responsavel"
          />
          <label
            htmlFor="address"
          >
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              id="deliveryAddress"
              type="text"
              onChange={ handleChange }
            />
          </label>
          <label
            htmlFor="address-number"
          >
            Numero
            <input
              data-testid="customer_checkout__input-address-number"
              id="deliveryNumber"
              type="number"
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            disabled={ useDisabled }
            onClick={ handleOnClick }
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
