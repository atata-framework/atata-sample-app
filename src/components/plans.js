module.exports = {
    template: require('./plans.html'),
    route: {
        activate() {
            this.$root.title = 'Plans'
        }
    }
}