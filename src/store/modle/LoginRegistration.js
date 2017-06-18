
const LoginRegistration = {
	state: {
		boxStatus: 'hidden',
		boxType: 'login',
		boxOpacity: '0',
	},
	mutations: {
		loginRegistration(state, value) {
			state.boxStatus = 'visible';
			state.boxType = value;
			state.boxOpacity = 1;
			document.body.style.overflow = 'hidden';
		},
		closePopup(state) {
			state.boxStatus = 'hidden';
			state.boxOpacity = 0;
			document.body.style.overflow = null;
		}
	},
	actions: {
		// changeName({state, commit, rootState}, value){
		// 	console.log(value);
		// 	commit('increment');
		// }
	},
	getters: {
		// doneTodosCount () {
		// 	return 66666666666;
		// }
	}
};

export default LoginRegistration;