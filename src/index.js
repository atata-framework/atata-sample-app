import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import App from './components/app.js'
import JQuery from '../node_modules/jquery/dist/jquery.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css'
import './css/main.css'
import '../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

window.$ = window.jQuery = JQuery

require('../node_modules/bootstrap/dist/js/bootstrap.js')

_ = require('lodash');

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

Vue.directive('show-modal', function (newValue) {
    $(this.el).modal(newValue ? 'show' : 'hide')
})

Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})

var router = new VueRouter()

var Routes = require('./routes.js')
Routes.init(router)

router.afterEach(function (transition) {
    router.app.clearErrors()
    $('.date-picker').datepicker({});
})

router.start(App, 'html')
