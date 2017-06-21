import axios from 'axios';

export const loginRequest = (param) => {
	return axios.post('/application/api/login', param);
};
