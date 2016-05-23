module.exports = {
    template: require('./login.html'),
    route: {
        data(transition) {
            this.$root.pageTitle = 'Log In';
        }
    }
}