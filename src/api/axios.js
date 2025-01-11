import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://45.153.189.178:8585',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
