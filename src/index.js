import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./css/main.css')

window.jQuery = require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

_ = require('lodash');

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
    '': {
        component: require('./components/home.js')
    },
    'signin': {
        component: require('./components/sign-in.js')
    },
    'users': {
        component: require('./components/user-list.js')
    },
    '*': {
        component: require('./components/not-found.js')
    }
})

router.start(require('./components/app.js'), 'html')