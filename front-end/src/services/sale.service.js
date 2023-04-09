import api from './api';

const sendSale = async (body) => {
  try {
    const { data: { sale } } = await api.post('/sale', { ...body });
    console.log(sale);
    return sale;
  } catch (error) {
    console.log(error);
  }
};

export default sendSale;
