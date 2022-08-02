import axios from '../utils/axios';

const getProducts = () => {
  return axios.get(`products`);
};

export default {
  getProducts,
};
