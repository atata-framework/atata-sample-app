﻿import Rules from '../validator-rules.js'

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
                if (this.email === 'admin@mail.com' && this.password === 'abc123') {
                    this.$root.isAuthenticated = true
                    this.$route.router.go('users')
                }
                else {
                    this.$setValidationErrors([
                        { field: 'password', message: 'Invalid email or password' }
                    ])
                }
            }
        }
    }
}