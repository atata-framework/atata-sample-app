module.exports = {
    template: require('./user-list.html'),
    data() {
        this.$root.title = 'Users';

        return {
            items: [
                { id: 1, firstName: 'John', lastName: 'Smith', email: 'john.smith@mail.com', location: 'London' },
                { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@mail.com', location: 'Tokio' }
            ]
        }
    },
    methods: {
        new () {
            var latestItem = _.maxBy(this.items, function (i) { return i.id; })
            var id = latestItem != null ? latestItem.id + 1 : 1
            this.items.push({ id: id, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@mail.com', location: 'Tokio' })
        }
    }
}