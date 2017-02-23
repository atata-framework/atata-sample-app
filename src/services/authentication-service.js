import UserService from '../services/user-service.js'

module.exports = {
    storageKey: 'authenticatedUserId',

    isAuthenticated() {
        return !!this.getAuthenticatedUserId()
    },
    getAuthenticatedUserId() {
        return sessionStorage.getItem(this.storageKey)
    },
    authenticate(email, password) {
        var user = _.find(UserService.getAll(), { email: email, password: password })

        if (user) {
            sessionStorage.setItem(this.storageKey, user.id)
            return true
        }
        return false
    },
    signOut() {
        sessionStorage.removeItem(this.storageKey)
    }
}