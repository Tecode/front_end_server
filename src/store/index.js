import Vue from 'vue';
import Vuex from 'vuex';
// 单个模块
import LoginRegistration from './LoginRegistration';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
		modules: {
			LoginRegistration: LoginRegistration,
		}
  })
}
