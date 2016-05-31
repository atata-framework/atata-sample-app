import UserService from '../services/user-service.js'

module.exports = {
    template: require('./user-details.html'),
    data() {
        return {
            summary: null
        }
    },
    route: {
        canReuse: false,
        activate() {
            try
            {
                var id = Number(this.$route.params.userId)
                this.summary = UserService.get(id)
                this.$root.title = this.summary.firstName + ' ' + this.summary.lastName
            }
            catch (e)
            {
                this.$root.showNotFound()
            }
        }
    }
}