import axios from 'axios';

export default ({ req }) => {
    return axios.create({
        baseURL: '/'
    });
};