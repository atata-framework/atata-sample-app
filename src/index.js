﻿import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./css/main.css')

window.jQuery = require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

router.map({
    '/login': {
        component: require('./components/login.js')
    }
})

router.redirect({
    '*': '/login'
})

router.start(require('./components/app.js'), 'html')