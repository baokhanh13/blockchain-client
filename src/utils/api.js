import axios from 'axios';

const api = axios.create({
	baseURL: 'https://polar-thicket-44772.herokuapp.com/api',
});


export default api;