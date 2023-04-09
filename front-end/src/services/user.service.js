import api from './api';

const getAllSellers = async () => {
  try {
    const { data: { sellers } } = await api.get('/user/sellers');
    return sellers;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllSellers;
