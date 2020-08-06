import axios from 'axios';

const api = axios.create({
    baseURL: 'http://34.200.218.199/:3333',
})

export default api;