import api from './api';

const getAllProducts = async () => {
  try {
    const { data: { products } } = await api.get('/products');
    return products;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllProducts;
