import api from './api';

const sendSale = async (newSale, products, token) => {
  const body = {
    newSale,
    products,
  };
  try {
    const { data: { sale } } = await api.post('/sale', body, {
      headers: {
        Authorization: token,
      },
    });
    console.log(sale);
    return sale;
  } catch (error) {
    console.log(error);
  }
};

export default sendSale;
