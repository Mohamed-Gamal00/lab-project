import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/style.css";
import "@/css/style.scss";
import "normalize.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
/* token */
import setAuthHeader from "@/utils/setAuthHeader";
if (localStorage.token) {
  setAuthHeader(localStorage.token);
} else {
  setAuthHeader(false);
}
createApp(App)
  .use(store)
  .component("FontAwesome", FontAwesomeIcon)
  .use(VueSweetalert2)
  .use(router)
  .mount("#app");
