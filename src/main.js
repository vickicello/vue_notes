import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({ // create a new Vue instance
  render: h => h(App),
}).$mount('#app') // mount it to the DOM with the div id app; App component is our entrypoint
