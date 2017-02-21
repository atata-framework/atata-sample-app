module.exports = {
    isAuthenticatedStorageKey: 'isAuthenticated',
    accountsStorageKey: 'accounts',

    isAuthenticated() {
        var value = sessionStorage.getItem(this.isAuthenticatedStorageKey)
        return value ? JSON.parse(value) : false
    },
    authenticate(email, password) {
        if (_.find(this.getAllAccounts(), { email: email, password: password })) {
            sessionStorage.setItem(this.isAuthenticatedStorageKey, JSON.stringify(true))
            return true
        }
        return false
    },
    signOut() {
        sessionStorage.setItem(this.isAuthenticatedStorageKey, JSON.stringify(false))
    },

    getAllAccounts() {
        var accounts = sessionStorage.getItem(this.accountsStorageKey)
        if (accounts) {
            return JSON.parse(accounts)
        }
        else {
            accounts = [
                { email: 'admin@mail.com', password: 'abc123' }
            ]
            sessionStorage.setItem(this.accountsStorageKey, JSON.stringify(accounts))
            return accounts
        }
    },
    addAccount(email, password) {
        var accounts = this.getAllAccounts()

        accounts.push({ email: email, password: password })

        sessionStorage.setItem(this.accountsStorageKey, JSON.stringify(accounts))
    }
}