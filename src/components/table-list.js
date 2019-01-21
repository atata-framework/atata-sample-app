module.exports = {
    template: require('./table-list.html'),
    data() {
        var items = [];

        for (var i = 0; i < 500; i++) {
            items.push({
                id: i + 1,
                name: 'Item ' + (i + 1),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non.'
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