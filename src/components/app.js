import AuthenticationService from '../authentication-service.js'

module.exports = {
    data() {
        return {
            title: null,
            isAuthenticated: AuthenticationService.isAuthenticated()
        }
    },
    methods: {
        signOut(e) {
            e.preventDefault()
            AuthenticationService.signOut()
            this.isAuthenticated = false
            this.$route.router.go('signin')
        }
    }
}