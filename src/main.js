import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import VueMask from "v-mask";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueMask);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
