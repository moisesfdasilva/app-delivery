import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from '../../store/context/ProductContext';
import '../../App.css';
import NavBar from '../../components/NavBar';
import Cards from '../../components/Cards';
// import UserContext from '../../store/context/UserContext';
import api from '../../services/api';

function Products() {
  const { getProducts } = useContext(ProductContext);
  // const { user } = useContext(UserContext);

  const history = useHistory();
  const [useProducts, setProducts] = useState([]);

  const checkToken = async () => {
    const data = localStorage.getItem('user');
    const result = JSON.parse(data);
    const { token } = result;
    try {
      await api.get('/user/verify', { headers: { Authorization: token } });
    } catch (err) {
      return history.push('/');
    }
  };

  async function getAllProducts() {
    const result = await getProducts();
    setProducts(result);
    // localStorage.setItem('user', JSON.stringify({ ...user }));
  }

  useEffect(() => {
    async function get() {
      await getAllProducts();
      checkToken();
    }
    get();
  }, []);

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
