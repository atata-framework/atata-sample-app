import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import VueStrap from 'vue-strap'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./css/main.css')

window.$ = window.jQuery = require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

_ = require('lodash');

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

Vue.component('modal', VueStrap.modal)

export var router = new VueRouter()

var Routes = require('./routes.js')
Routes.init(router)

router.start(require('./components/app.js'), 'html')