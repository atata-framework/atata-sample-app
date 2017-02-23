import Rules from '../validator-rules.js'
import AuthenticationService from '../services/authentication-service.js'
import UserService from '../services/user-service.js'

module.exports = {
    template: require('./user-list.html'),
    validators: {
        uniqueEmail: {
            message: 'is already used by another user',
            check: function (value) {
                return this._vm.editItem.isNew
                    ? UserService.isEmailUnique(value)
                    : true;
            }
        }
    },
    data() {
        return {
            items: UserService.getAll(),
            editItem: {
                title: null,
                isNew: true,
                data: null,
                rules: {
                    firstName: Rules.create().required().minLength(2).maxLength(128).build(),
                    lastName: Rules.create().required().minLength(2).maxLength(128).build(),
                    email: Rules.create().required().email().maxLength(256).local('uniqueEmail').build(),
                    office: Rules.create().required().build(),
                    gender: Rules.create().required().build(),
                    birthday: Rules.create().empty().build(),
                    notes: Rules.create().maxLength(2000).build()
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
        remove(item) {
            if (confirm('Are you sure you want to delete \"' + item.firstName + ' ' + item.lastName + '\" user?')) {
                var index = this.items.indexOf(item);
                if (index > -1) {
                    this.items.splice(index, 1);
                    UserService.saveAll(this.items);
                    if (item.id == AuthenticationService.getAuthenticatedUserId()) {
                        this.$root.signOut();
                    }
                }
            }
        },
        create() {
            this.$validate()

            if (this.$validation.valid) {
                this.editItem.data.password = 'abc123';
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