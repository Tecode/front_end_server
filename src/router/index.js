import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/HomePage.vue';
import UpdateLog from '../views/UpdateLog.vue';
import Message from '../views/Message.vue';
import Share from '../views/Share.vue';
import Discover from '../views/Discover.vue';

Vue.use(Router);

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id));
// const ItemView = () => import('../views/ItemView.vue');
// const UserView = () => import('../views/UserView.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomePage },
      { path: '/discover/:page(\\d+)?', component: Discover },
      { path: '/share/:page(\\d+)?', component: Share },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
      // { path: '/item/:id(\\d+)', component: ItemView },
      // { path: '/user/:id', component: UserView },
      // { path: '/', redirect: '/top' }
    ]
  })
}
