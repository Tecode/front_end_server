import { loginRequest } from '../../api';

const LoginRegistration = {
	state: {
		boxStatus: 'hidden',
		boxType: 'login',
		loading: false,
		isError: false,
		data: '',

		user_email: '',
		password: '',
		user_name: '',
		confirm_password: '',

		loginError: false,

		registerError: false,
		registerLoading: true,

		user_emailError: false,
		passwordError: false,
		user_nameError: false,
		confirm_passwordError: false,
	},
	mutations: {
		loginRegistration(state, value) {
			state.boxStatus = 'visible';
			state.boxType = value;
			document.body.style.overflow = 'hidden';
		},
		closePopup(state) {
			state.boxStatus = 'hidden';
			state.user_email = '';
			state.password = '';
			state.user_name = '';
			state.confirm_password = '';
			state.isError = false;
			state.data = '';
			document.body.style.overflow = null;
		},
		request(state, { loading, isError, data }) {
			state.loading = loading;
			state.isError = isError;
			state.data = data;
		},
		inputContent(state, event){
			state[event.target.id] = event.target.value;
		}
	},
	actions: {
		loginRequest({state, commit, rootState}, value){
			commit('request', {
				loading: true,
				isError: false,
				data: '' });
			console.log(state.user_email);
			loginRequest().then( (response) => {
				commit('request', { loading:false });
				commit('request', {
					loading: false,
					isError: false,
					data: response });
			}).catch( (err) => {
				commit('request', {
					loading: false,
					isError: true,
					data: err.response.data});
				console.log(err.response.data.error);
			});
		},
		registerRequest({state, commit, rootState}, value){
			console.log(value);
			commit('increment');
		}
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;