import Vue from 'vue'
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.http.options.root = process.env.API_URL;
