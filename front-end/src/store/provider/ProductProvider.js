import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../context/ProductContext';
import getAllProducts from '../../services/product.services';

export default function ProductProvider({ children }) {
  const [useProducts, setProducts] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [useCar, setCar] = useState([]);

  function addCar(product) {
    if (useCar.some((e) => e.name === product.name)) {
      const update = useCar.reduce((acc, element) => {
        if (element.name === product.name) {
          return [...acc, { ...element, quantity: product.quantity + 1 }];
        } return [...acc, element];
      }, []);

      setCar(update);
    } else {
      setCar([...useCar, product]);
    }
  }

  function removeCar(product) {
    const beer = useCar.find((e) => e.name === product.name);
    if (beer.quantity === 1) {
      const remove = useCar.filter((e) => e.name !== product.name);
      return setCar(remove);
    } const update = useCar.reduce((acc, element) => {
      if (element.name === product.name) {
        return [...acc, { ...element, quantity: product.quantity - 1 }];
      } return [...acc, element];
    }, []);

    setCar(update);
  }

  async function getProducts() {
    try {
      const products = await getAllProducts();
      setProducts(...products);

      return products;
    } catch (error) {
      console.log('Erros na busca de produtos');
    }
  }

  const context = useMemo(() => ({
    useProducts,
    setProducts,
    getProducts,
    valorTotal,
    setValorTotal,
    useCar,
    setCar,
    addCar,
    removeCar,
  }), [
    useProducts,
    setProducts,
    valorTotal,
    setValorTotal,
    useCar,
    setCar,
    addCar,
    removeCar,
  ]);

  return (
    <ProductContext.Provider value={ context }>
      { children }
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
