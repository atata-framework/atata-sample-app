module.exports = {
    template: require('./not-found.html'),
    route: {
        activate() {
            this.$root.title = 'Page Not Found';
        }
    }
}