import axios from 'axios';

export const loginRequestApi = (param) => {
	return axios.post('/application/api/login', param);
};
