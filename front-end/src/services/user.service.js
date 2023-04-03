import api from './api';

const postLogin = async (endpoint, body) => api.post(endpoint, body);

export default postLogin;
