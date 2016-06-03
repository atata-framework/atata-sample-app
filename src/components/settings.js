module.exports = {
    template: require('./settings.html'),
    route: {
        activate() {
            this.$root.title = 'Settings'
        }
    }
}