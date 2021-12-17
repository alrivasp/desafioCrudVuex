import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKHj2oly8HrPhU_sMI0Uo-xyMIw3tjZQ0",
  authDomain: "fir-crud-6d2cf.firebaseapp.com",
  projectId: "fir-crud-6d2cf",
  storageBucket: "fir-crud-6d2cf.appspot.com",
  messagingSenderId: "1064209077979",
  appId: "1:1064209077979:web:da2d18b94c6653c3b5defe",
  measurementId: "G-X1DY2TWH2L",
};

Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
