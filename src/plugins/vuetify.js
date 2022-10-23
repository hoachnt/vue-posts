// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  components,
  directives,
})

export default createVuetify(
  {
    defaults: {
      global: {
        ripple: false,
      },
      VSheet: {
        elevation: 4,
      },
    },
    theme: {
      defaultTheme: 'dark'
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
);
