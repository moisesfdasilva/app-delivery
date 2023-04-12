import api from './api';

const deleteUsers = async (id, token) => {
  try {
    await api.delete(`/user/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default deleteUsers;
