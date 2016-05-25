import Rules from '../validator-rules.js'

module.exports = {
    template: require('./sign-in.html'),
    data() {
        this.$root.title = 'Sign In';

        return {
            email: null,
            password: null,
            rules: {
                email: Rules.for('Email').required().minLength(5).maxLength(256).build(),
                password: Rules.for('Password').required().minLength(3).maxLength(16).build()
            }
        }
    },
    methods: {
        signIn() {
            console.log(this.email)
            console.log(this.password)
        }
    }
}