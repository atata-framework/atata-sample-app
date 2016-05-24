module.exports = {
    template: require('./sign-in.html'),
    data() {
        this.$root.title = 'Sign In';

        return {
            email: null,
            password: null
        }
    },
    methods: {
        signIn() {
            console.log(this.email)
            console.log(this.password)
        }
    }
}