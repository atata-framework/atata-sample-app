module.exports = {
    template: require('./sign-in.html'),
    route: {
        data(transition) {
            this.$root.title = 'Sign In';
        }
    }
}