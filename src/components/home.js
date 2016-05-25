module.exports = {
    template: require('./home.html'),
    route: {
        data(transition) {
            this.$root.title = null;
        }
    }
}