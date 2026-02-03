import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/21-5/the-julge',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
