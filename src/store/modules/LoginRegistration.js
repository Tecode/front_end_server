import { loginRequestApi } from '../../api';
import CryptoJS from 'crypto-js';
import {
	loginRegistration,
	closePopup,
	request,
	inputContent,
	loginRequest,
	registerRequest,
} from '../actionTypes'

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
		[loginRegistration](state, value) {
			state.boxStatus = 'visible';
			state.boxType = value;
			document.body.style.overflow = 'hidden';
		},
		[closePopup](state) {
			state.boxStatus = 'hidden';
			state.user_email = '';
			state.password = '';
			state.user_name = '';
			state.confirm_password = '';
			state.isError = false;
			state.data = '';
			document.body.style.overflow = null;
		},
		[request](state, { loading, isError, data }) {
			state.loading = loading;
			state.isError = isError;
			state.data = data;
		},
		[inputContent](state, event){
			state.isError = false;
			state.data = '';
			state[event.target.id] = event.target.value;
		}
	},
	actions: {
		[loginRequest]({state, commit, rootState}, value){
			commit('SHOW_MESSAGE',{
				text: '点击了登录',
				isError: true,
				isShow: true});
			commit('request', {
				loading: true,
				isError: false,
				data: '' });
			// 加密密码
			const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
			const iv  = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
			const encrypted = CryptoJS.AES.encrypt(state.password, key, { iv: iv });
			const password_base64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

			loginRequestApi({user_email: state.user_email, password: password_base64}).then( (response) => {
				commit('request', { loading:false });
				commit('request', {
					loading: false,
					isError: false,
					data: response });
				commit('closePopup');
			}).catch( (err) => {
				commit('request', {
					loading: false,
					isError: true,
					data: err.response.data});
				console.log(err.response.data.error);
			});
		},
		[registerRequest]({state, commit, rootState}, value){
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