module.exports = {
    template: require('./forbidden.html'),
    route: {
        activate() {
            this.$root.title = 'Forbidden';
        }
    }
}