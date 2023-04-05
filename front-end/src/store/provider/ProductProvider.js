import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../context/ProductContext';
import getAllProducts from '../../services/product.services';

export default function ProductProvider({ children }) {
  const [useProducts, setProducts] = useState({
    products: [],
  });

  const [sales, setSales] = useState([
    {
      name: 'Skol Lata 250ml',
      quantity: 3,
      unitPrice: 2.20,
      subTotal: 10,
    },
    {
      name: 'Brahma 600ml',
      quantity: 10,
      unitPrice: 7.50,
      subTotal: 10,
    },
    {
      name: 'Skol Beats Senses 269ml',
      quantity: 5,
      unitPrice: 3.57,
      subTotal: 10,
    },
  ]);

  async function getProducts() {
    try {
      const products = await getAllProducts();
      setProducts({ ...products });

      return products;
    } catch (error) {
      console.log('Erros na busca de produtos');
    }
  }

  const context = useMemo(() => ({
    useProducts,
    setProducts,
    getProducts,
    sales,
    setSales,
  }), [useProducts, setProducts]);

  return (
    <ProductContext.Provider value={ context }>
      { children }
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
