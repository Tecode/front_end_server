
const LoginRegistration = {
	state: {
		name: 'Hello World!'
	},
	mutations: {
		increment (state) {
			state.name = 'aming';
		}
	},
	actions: {
		changeName({state, commit, rootState}, value){
			console.log(value);
			commit('increment');
		}
	},
	getters: {
		doneTodosCount () {
			return 66666666666;
		}
	}
};

export default LoginRegistration;