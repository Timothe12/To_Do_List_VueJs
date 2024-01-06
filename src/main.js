import {createRouter, createWebHistory} from 'vue-router';

import './assets/main.css'
import Home from './Home.vue';
import Connexion from './Connexion.vue';
import Profil from './Profil.vue';
import Inscription from './Inscription.vue';
import App from './App.vue';
import * as Vue from 'vue';
import moment from 'moment';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: Connexion
    },
    {
        path: '/profil',
        component: Profil
    },
    {
        path: '/inscription',
        component: Inscription
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
