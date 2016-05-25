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
        new() {
        }
    }
}