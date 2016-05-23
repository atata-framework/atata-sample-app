import Vue from 'vue'
import App from './components/app.js'
import Login from './components/login.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
    '/login': {
        component: Login,
        title: 'Log In'
    }
})

router.redirect({
    '*': '/login'
})

router.start(App, '#app')