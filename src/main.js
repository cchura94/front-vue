import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';




const app = createApp(App)
app.use(ToastService);
app.use(router)  //habilta las rutas


app.component('Dialog', Dialog); // habilitando componente  de primevue
app.component('Button', Button); // habilitando componente  de primevue
app.component('MenuCliente', Menubar);
app.component('Toast', Toast);

app.mount('#app')