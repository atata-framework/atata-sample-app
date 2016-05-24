module.exports = {
    template: require('./not-found.html'),
    route: {
        data(transition) {
            this.$root.title = 'Page Not Found';
        }
    }
}