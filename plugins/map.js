import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import {
  gmapApi
} from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqLzkWTDlaVOOjFEnyv-xN_O3Zxw9QKPY'
  }
});
Vue.prototype.$google = gmapApi;
