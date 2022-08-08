// import { filter } from 'core-js/core/array'
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import VueTypedJs from 'vue-typed-js'

// Vue.filter('touppercase', function(value) {
//     return value.toUpperCase()
// })





createApp(App)
.use(store)
// .use(VueTypedJs)
.use(router)
.mount('#app')
