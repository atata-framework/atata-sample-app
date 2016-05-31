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
                    firstName: Rules.create().required().maxLength(128).build(),
                    lastName: Rules.create().required().maxLength(128).build(),
                    email: Rules.create().required().email().maxLength(256).build(),
                    office: Rules.create().required().build(),
                    sex: Rules.create().required().build()
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
        new() {
            this.editItem.title = 'New User'
            this.editItem.isNew = true
            this.editItem.data = UserStorage.new()
        },
        edit(item) {
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