import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Quick from './components/quickAcces.vue';
import Daily from './components/routerComponents/dailyplanner.vue';
import Steps from './components/routerComponents/functionSteps.vue';
import Projects from './components/routerComponents/projects.vue';
import ToDo from './components/routerComponents/to-do-list.vue';
import Timer from './components/routerComponents/timer.vue';


// Here are the components made. So it can be used in the main vue file
Vue.component('quick-acces', Quick);

Vue.use(VueRouter);
// Routers are made Here
const routes = [
  {path: '/to-do-list', component: ToDo},
  {path: '/dailyplanner', component: Daily},
  {path: '/projects', component: Projects},
  {path: '/function-steps', component: Steps},
  {path: '/timer', component: Timer}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
