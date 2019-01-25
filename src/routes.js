import AuthenticationService from './services/authentication-service.js'
import forbidden from './components/forbidden.js'

module.exports = {
    router: null,
    init(router) {
        this.router = router

        var requireWithAuthentication = function (componentPath) {
            var component = require(componentPath)

            return function (resolve) {
                if (AuthenticationService.isAuthenticated()) {
                    resolve(component)
                }
                else {
                    resolve(forbidden)
                }
                router.stop()
                router.start()
            }
        }

        router.map({
            '': {
                component: require('./components/home.js')
            },
            '/signin': {
                component: require('./components/sign-in.js')
            },
            '/signup': {
                component: require('./components/sign-up.js')
            },
            '/plans': {
                component: require('./components/plans.js')
            },
            '/products': {
                component: require('./components/products.js')
            },
            '/calculations': {
                component: require('./components/calculations.js')
            },
            '/table-list': {
                component: require('./components/table-list.js')
            },
            '/table-with-row-spanned-cells': {
                component: require('./components/table-with-row-spanned-cells.js')
            },
            '/settings': {
                component: requireWithAuthentication('./components/settings.js')
            },
            '/users': {
                component: requireWithAuthentication('./components/user-list.js')
            },
            '/users/:userId': {
                component: requireWithAuthentication('./components/user-details.js')
            },
            '*': {
                component: require('./components/not-found.js')
            }
        })
    },
    reinit() {
        this.init(this.router)
        this.router.stop()
        this.router.start()
    }
}