import AuthenticationService from './authentication-service.js'
import forbidden from './components/forbidden.js'

module.exports = {
    router: null,
    init(router) {
        this.router = router

        var requireWithAuthentication = function(componentPath) {
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
            'signin': {
                component: require('./components/sign-in.js')
            },
            'users': {
                component: requireWithAuthentication('./components/user-list.js')
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