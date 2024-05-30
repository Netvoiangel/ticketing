import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        // Мы находимся на сервере
        return axios.create({
            baseURL: 'http://109.205.56.200', // Внешний IP адрес Traefik LoadBalancer
            headers: req.headers
        });
    } else {
        // Мы находимся на клиенте
        return axios.create({
            baseURL: '/'
        });
    }
};
