import api from './api';

const getAllSellers = async () => {
  try {
    const { data: { sellers } } = await api.get('/user/sellers');
    return sellers;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersComun = async () => {
  try {
    const { data: { users } } = await api.get('/user/data');
    return users;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllSellers;
