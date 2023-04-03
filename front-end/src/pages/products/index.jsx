import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../../store/context/ProductContext';
import '../../App.css';
import NavBar from '../../components/NavBar';
import Cards from '../../components/Cards';

function Products() {
  const { getProducts } = useContext(ProductContext);

  const [useProducts, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const result = await getProducts();
      setProducts(result);
    }
    getAllProducts();
  }, []);

  console.log('11111', useProducts);

  return (
    <div>
      <NavBar />
      <div className="ProductPage">
        {
          useProducts.length === 0 ? <p>Carrengando...</p>
            : useProducts.map((element) => (
              <Cards
                key={ element.id }
                price={ element.price }
                urlImage={ element.urlImage }
                name={ element.name }
                id={ element.id }
              />
            ))
        }
      </div>
    </div>
  );
}

export default Products;
