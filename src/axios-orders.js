import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://true-burger.firebaseio.com/',
});

export default instance;
