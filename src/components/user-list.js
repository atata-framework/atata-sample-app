import Rules from '../validator-rules.js'

module.exports = {
    template: require('./user-list.html'),
    data() {
        this.$root.title = 'Users';

        return {
            items: [
                { id: 1, firstName: 'John', lastName: 'Smith', email: 'john.smith@mail.com', location: 'London' },
                { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@mail.com', location: 'Tokio' }
            ],
            editItem: {
                title: null,
                isNew: true,
                data: null,
                rules: {
                    firstName: Rules.for('First Name').required().maxLength(128).build(),
                    lastName: Rules.for('Last Name').required().maxLength(128).build()
                }
            }
        }
    },
    computed: {
        isEditing() {
            return this.editItem.data != null
        }
    },
    methods: {
        new () {
            var latestItem = _.maxBy(this.items, function (i) { return i.id; })
            var id = latestItem != null ? latestItem.id + 1 : 1

            this.editItem.title = 'New User'
            this.editItem.isNew = true
            this.editItem.data = { id: id, firstName: null, lastName: null, email: null, location: null }
        },
        edit (item) {
            this.editItem.title = item.firstName + ' ' + item.lastName;
            this.editItem.isNew = false
            this.editItem.data = item
        },
        cancelEditing() {
            this.editItem.data = null;
        },
        create() {
            this.$validate()

            if (this.$validation.valid) {
                this.items.push(this.editItem.data)
                this.editItem.data = null;
            }
        },
        update() {
        }
    }
}