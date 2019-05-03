import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import uk from 'vuetify/es5/locale/uk';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';


Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  iconfont: 'mdi',
  lang: {
    locales: { uk },
    current: 'uk',
  },
});
