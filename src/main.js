import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueGooglePlaces from "vue-google-places";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.use(VueGooglePlaces);

const moment = require("moment");
require("moment/locale/fr");

Vue.use(require("vue-moment"), {
  moment
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
