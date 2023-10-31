import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHouse,
  faInfoCircle,
  faTags,
  faEnvelope,
  faCheck,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

library.add(faHouse, faInfoCircle, faTags, faEnvelope, faServicestack, faCheck, faPhone, faLocationDot);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
