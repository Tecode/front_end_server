import Vue from 'vue';
import Vuex from 'vuex';
// 单个模块
import LoginRegistration from './modle/LoginRegistration';
import NavHeader from './modle/NavHeader';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
		modules: {
			LoginRegistration: LoginRegistration,
			NavHeader: NavHeader,
		}
  })
}
