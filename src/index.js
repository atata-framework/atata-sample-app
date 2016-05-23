import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
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