
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

// If you do not want tree-shaking, you can simply do this.
// This will include all of the Element UI components and CSS
//
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('navbar-component', require('./components/NavbarComponent.vue'));
Vue.component('input-component', require('./components/InputComponent.vue'));

import { Container, Header, Main, Footer } from 'element-ui';
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);

const app = new Vue({
    el: '#app'
});
