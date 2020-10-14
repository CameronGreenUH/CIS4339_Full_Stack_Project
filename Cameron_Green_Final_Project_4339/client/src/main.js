import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
//Global css
import "bootstrap/dist/css/bootstrap.css";

//Sets my store globally
import { store } from "./store/store";

//The modal-like popup that indicates a success or failure
import VueSwal from 'vue-swal';
Vue.use(VueSwal);

const base = axios.create({
  baseURL: "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount("#app");