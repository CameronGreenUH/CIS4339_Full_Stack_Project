import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  //Adds routes of the components
  {
    path: '/home',
    name: 'Home',
    component: () => 
      import("@/components/Home.vue"),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => 
      import("@/components/Form.vue"),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => 
      import("@/components/Checkout.vue"),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => 
      import("@/components/FAQ.vue"),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import("../views/Account.vue")
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  }
];

//Helps keep track of the history of the user
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;