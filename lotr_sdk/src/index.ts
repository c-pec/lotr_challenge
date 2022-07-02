import axios from 'axios';
import { API_URL } from './constant'; 

export const getAllBooks = (): Promise<object> => {
  // books endpoint does not require auth
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book`)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
}

export default { getAllBooks };