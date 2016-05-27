import Rules from '../validator-rules.js'
import UserStorage from '../user-storage.js'

module.exports = {
    template: require('./user-list.html'),
    data() {
        this.$root.title = 'Users';

        return {
            items: UserStorage.getAll(),
            editItem: {
                title: null,
                isNew: true,
                data: null,
                rules: {
                    firstName: Rules.for('First Name').required().maxLength(128).build(),
                    lastName: Rules.for('Last Name').required().maxLength(128).build(),
                    office: Rules.for('Office').required().build()
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
            this.editItem.data = { id: id, firstName: null, lastName: null, email: null, office: null }
        },
        edit (item) {
            this.editItem.title = item.firstName + ' ' + item.lastName;
            this.editItem.isNew = false
            this.editItem.data = jQuery.extend({}, item);
        },
        create() {
            this.$validate()

            if (this.$validation.valid) {
                this.items.push(this.editItem.data)

                UserStorage.saveAll(this.items);
                this.editItem.data = null;
            }
        },
        update() {
            this.$validate()

            if (this.$validation.valid) {
                var itemIndex = _.findIndex(this.items, { 'id': this.editItem.data.id })
                console.log(itemIndex);
                this.items.$set(itemIndex, this.editItem.data);

                UserStorage.saveAll(this.items);
                this.editItem.data = null;
            }
        },
        cancelEditing() {
            this.editItem.data = null;
        }
    }
}