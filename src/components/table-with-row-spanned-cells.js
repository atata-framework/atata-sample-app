module.exports = {
    template: require('./table-with-row-spanned-cells.html'),
    data() {
        return {
        };
    },
    route: {
        activate() {
            this.$root.title = 'Table with Row-Spanned Cells';
        }
    }
}