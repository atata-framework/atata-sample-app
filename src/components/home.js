module.exports = {
    template: require('./home.html'),
    route: {
        activate() {
            this.$root.title = null;
        }
    }
}