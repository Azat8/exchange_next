import axios from 'axios';
import env from '../env';

const instance = axios.create({
    baseURL: env.API_URL,
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;