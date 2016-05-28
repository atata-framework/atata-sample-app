module.exports = {
    storageKey: 'isAuthenticated',
    isAuthenticated() {
        var value = sessionStorage.getItem(this.storageKey)
        return value ? JSON.parse(value) : false
    },
    authenticate(email, password) {
        var isSuccess = (email === 'admin@mail.com' && password === 'abc123')
        console.log(email)
        console.log(password)
        console.log(isSuccess)

        sessionStorage.setItem(this.storageKey, JSON.stringify(isSuccess))
        return isSuccess
    }
}