// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './common/stylus/mixin.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router: router,
  render: h => h(App)
})

  // render: function (h) {
  //   return h(App)
  // }
  // h => h(App)

// new Vue({
//   el: '#main',
//   router: router,
//   template: '<App/>',
//   components: {App}
// })

// new Vue({
//   router,
//   template: '<App/>',
//   components: {App}
// }).$mount('#main')
