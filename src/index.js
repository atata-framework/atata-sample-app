import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import App from './components/app.js'
import JQuery from '../node_modules/jquery/dist/jquery.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css'
import '../node_modules/jquery-confirm/dist/jquery-confirm.min.css'
import './css/main.scss'
import '../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

window.$ = window.jQuery = JQuery

require('../node_modules/bootstrap/dist/js/bootstrap.js')
require('../node_modules/jquery-confirm/dist/jquery-confirm.min.js')

_ = require('lodash');

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

require('./directives.js')
require('./validators.js')

var router = new VueRouter()

var Routes = require('./routes.js')
Routes.init(router)

router.afterEach(function (transition) {
    router.app.clearErrors()
})

router.start(App, 'html')
