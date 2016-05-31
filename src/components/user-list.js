import Rules from '../validator-rules.js'
import UserService from '../services/user-service.js'

module.exports = {
    template: require('./user-list.html'),
    data() {
        return {
            items: UserService.getAll(),
            editItem: {
                title: null,
                isNew: true,
                data: null,
                rules: {
                    firstName: Rules.create().required().maxLength(128).build(),
                    lastName: Rules.create().required().maxLength(128).build(),
                    email: Rules.create().required().email().maxLength(256).build(),
                    office: Rules.create().required().build(),
                    sex: Rules.create().required().build(),
                    birthday: Rules.create().required().build()
                }
            }
        }
    },
    computed: {
        isEditing() {
            return this.editItem.data != null
        }
    },
    route: {
        activate() {
            this.$root.title = 'Users';
        }
    },
    methods: {
        new() {
            this.editItem.title = 'New User'
            this.editItem.isNew = true
            this.editItem.data = UserService.new()
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

                UserService.saveAll(this.items);
                this.editItem.data = null;
            }
        },
        update() {
            this.$validate()

            if (this.$validation.valid) {
                var itemIndex = _.findIndex(this.items, { 'id': this.editItem.data.id })
                this.items.$set(itemIndex, this.editItem.data);

                UserService.saveAll(this.items);
                this.editItem.data = null;
            }
        },
        cancelEditing() {
            this.editItem.data = null;
        }
    }
}