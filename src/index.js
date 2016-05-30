import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import VueStrap from 'vue-strap'

import App from './components/app.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

window.$ = window.jQuery = require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

_ = require('lodash');

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

Vue.component('modal', VueStrap.modal)

Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})

var router = new VueRouter()

var Routes = require('./routes.js')
Routes.init(router)

router.afterEach(function (transition) {
    router.app.clearErrors()
})

router.start(App, 'html')
