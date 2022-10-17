import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router/router";
import directives from "@/directives";
import store from "@/store";
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

library.add(faBlog, faCircleInfo)

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
