import AuthenticationService from './authentication-service.js'
var forbidden = require('./components/forbidden.js');

module.exports = {
    init(router) {
        var requireWithAuthentication = function(componentPath) {
            var component = require(componentPath)

            return function (resolve) {
                if (AuthenticationService.isAuthenticated()) {
                    resolve(component)
                }
                else {
                    resolve(forbidden)
                }
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

        router.start(require('./components/app.js'), 'html')
    }
}