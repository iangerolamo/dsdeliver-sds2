import axios from 'axios';

const baseURL = 'http://localhost:8080';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fetchProducts() {
  return axios.get(`${baseURL}/products`);
}
