/**
 * 
 * Arquivo: routes.js
 * Data: 18/09/2018
 * Descrição: arquivo responsável por lidar com as rotas da aplicação no
 * lado do Front-End.
 * Author: Glacia Lemos
 * 
 */

import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];