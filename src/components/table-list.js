module.exports = {
    template: require('./table-list.html'),
    data() {
        var items = [];

        for (var i = 0; i < 250; i++) {
            items.push({
                id: i + 1,
                name: 'Item ' + (i + 1)
            });
        }
        return {
            items: items
        };
    },
    route: {
        activate() {
            this.$root.title = 'Table List';
        }
    }
}