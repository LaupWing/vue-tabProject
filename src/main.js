import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Quick from './components/QuickAcces.vue';
import Daily from './components/routerComponents/Dailyplanner.vue';
import Steps from './components/routerComponents/FunctionSteps.vue';
import Projects from './components/routerComponents/Projects.vue';
import ToDo from './components/routerComponents/To-do-list.vue';
import Timer from './components/routerComponents/Timer.vue';
import Test from './components/routerComponents/Test.vue';
import Home from './components/routerComponents/Home.vue';


// Here are the components made. So it can be used in the main vue file
Vue.component('quick-acces', Quick);

Vue.use(VueRouter);
// Routers are made Here
const routes = [
  {path: '/', component: Home, name:'Home', props: true},
  {path: '/to-do-list', component: ToDo, name:'ToDo', props: true},
  {path: '/dailyplanner', component: Daily, name:'Daily', props: true},
  {path: '/projects', component: Projects, name:'Projects', props: true},
  {path: '/function-steps', component: Steps, name:'Steps', props: true},
  {path: '/timer', component: Timer, name: 'Timer', props: true},
  {path: '/test', component: Test, name: 'Test', props: true}
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
