import AuthenticationService from '../authentication-service.js'
import Routes from '../routes.js'

module.exports = {
    data() {
        return {
            title: null,
            isAuthenticated: AuthenticationService.isAuthenticated(),
            errors: {
                notFound: false
            }
        }
    },
    methods: {
        signIn(email, password) {
            var isSucces = AuthenticationService.authenticate(email, password)
            if (isSucces) {
                this.isAuthenticated = true
                Routes.reinit()
            }
            return isSucces
        },
        signOut(e) {
            e.preventDefault()
            AuthenticationService.signOut()
            this.isAuthenticated = false
            Routes.reinit()
            this.$route.router.go('/signin')
        },
        showNotFound() {
            this.errors.notFound = true
            this.title = 'Page Not Found'
        }
    },
    components: {
        notFound: {
            template: require('./not-found.html')
        }
    }
}