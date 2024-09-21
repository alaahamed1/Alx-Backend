import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router.js';
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faCartArrowDown);
library.add(faTrash);



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store)
app.use(router)
app.mount('#app')