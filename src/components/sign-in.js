import Rules from '../validator-rules.js'

module.exports = {
    template: require('./sign-in.html'),
    data() {
        return {
            email: null,
            password: null,
            rules: {
                email: Rules.create().required().minLength(5).maxLength(256).build(),
                password: Rules.create().required().minLength(3).maxLength(16).build()
            }
        }
    },
    route: {
        activate() {
            this.$root.title = 'Sign In';
        }
    },
    methods: {
        signIn() {
            this.$validate()

            if (this.$validation.valid) {
                if (this.$root.signIn(this.email, this.password)) {
                    this.$route.router.go('/users')
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