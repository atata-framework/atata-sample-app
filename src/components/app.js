import AuthenticationService from '../authentication-service.js'

module.exports = {
    data() {
        return {
            title: null
        }
    },
    computed: {
        isAuthenticated() {
            return AuthenticationService.isAuthenticated();
        }
    }
}