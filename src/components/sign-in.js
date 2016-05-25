module.exports = {
    template: require('./sign-in.html'),
    data() {
        this.$root.title = 'Sign In';

        return {
            email: null,
            password: null,
            rules: {
                password: {
                    minlength: { rule: 3, message: 'minimum length is 3' },
                    maxlength: { rule: 16, message: 'maximum length is 16' }
                }
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