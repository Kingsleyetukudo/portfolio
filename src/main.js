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

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faGithub, faTwitter, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import {  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGithub, faTwitter, faInstagram, faLinkedin, faFacebook)




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
// .use(VueTypedJs)
.use(router)
.mount('#app')
