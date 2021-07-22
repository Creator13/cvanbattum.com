import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGithub, faInstagram, faLinkedin, faUnsplash} from "@fortawesome/free-brands-svg-icons";
import VueMasonry from "vue-masonry-css";

Vue.config.productionTip = false
Vue.use(VueMasonry);

library.add(faArrowAltCircleLeft);
library.add(faCrown);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faUnsplash);
library.add(faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
