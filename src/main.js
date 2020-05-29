import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ // create a new Vue instance
  render: h => h(App),
}).$mount('#app') // mount it to the DOM with the div id app; App component is our entrypoint
