
const LoginRegistration = {
	state: {
		activeNav: '/'
	},
	mutations: {
		listenerRouting (state, val) {
			state.activeNav = val;
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