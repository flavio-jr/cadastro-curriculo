// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Validator from 'vee-validate'
import validatorDictionary from './utils/validatorDictionary'
import VueMask from 'v-mask'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Validator, {
  dictionary: validatorDictionary,
  locale: 'br'
})

Vue.use(VueMask)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
