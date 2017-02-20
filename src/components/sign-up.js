import Rules from '../validator-rules.js'
import AuthenticationService from '../services/authentication-service.js'
import UserService from '../services/user-service.js'

module.exports = {
    template: require('./sign-up.html'),
    data() {
        return {
            data: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                office: null,
                gender: null,
            },
            rules: {
                firstName: Rules.create().required().minLength(2).maxLength(128).build(),
                lastName: Rules.create().required().minLength(2).maxLength(128).build(),
                email: Rules.create().required().email().maxLength(256).build(),
                password: Rules.create().required().minLength(3).maxLength(16).build(),
                office: Rules.create().required().build(),
                gender: Rules.create().required().build()
            }
        }
    },
    route: {
        activate() {
            this.$root.title = 'Sign Up';
        }
    },
    methods: {
        signUp() {
            this.$validate()

            if (this.$validation.valid) {
                var userItems = UserService.getAll();
                userItems.push(this.data);
                UserService.saveAll(userItems);

                AuthenticationService.addAccount(this.data.email, this.data.password);

                if (this.$root.signIn(this.data.email, this.data.password)) {
                    this.$route.router.go('/users')
                }
            }
        }
    }
}