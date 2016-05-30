import UserStorage from '../user-storage.js'

module.exports = {
    template: require('./user-details.html'),
    data() {
        return {
            summary: null
        }
    },
    route: {
        activate() {
            var id = Number(this.$route.params.userId)
            this.summary = UserStorage.get(id)
            this.$root.title = this.summary.firstName + ' ' + this.summary.lastName
        }
    }
}