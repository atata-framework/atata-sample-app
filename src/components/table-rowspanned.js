module.exports = {
    template: require('./table-rowspanned.html'),
    data() {
        return {
        };
    },
    route: {
        activate() {
            this.$root.title = 'Table With Spanned Rows';
        }
    }
}