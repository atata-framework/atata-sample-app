import Rules from '../validator-rules.js'
import AuthenticationService from '../authentication-service.js'

module.exports = {
    template: require('./sign-in.html'),
    data() {
        this.$root.title = 'Sign In';

        return {
            email: null,
            password: null,
            rules: {
                email: Rules.create().required().minLength(5).maxLength(256).build(),
                password: Rules.create().required().minLength(3).maxLength(16).build()
            }
        }
    },
    methods: {
        signIn() {
            this.$validate()

            if (this.$validation.valid) {
                if (AuthenticationService.authenticate(this.email, this.password)) {
                    this.$root.isAuthenticated = true
                    this.$route.router.go('users')
                }
                else {
                    this.password = null
                    this.$setValidationErrors([
                        { field: 'password', message: 'or Email is invalid' }
                    ])
                }
            }
        }
    }
}