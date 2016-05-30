module.exports = {
    storageKey: 'users',
    new () {
        var allUsers = this.getAll()
        var latestUser = _.maxBy(allUsers, function (i) { return i.id })
        var id = latestUser != null ? latestUser.id + 1 : 1
        return {
            id: id,
            firstName: null,
            lastName: null,
            email: null,
            office: null,
            sex: null
        }
    },
    get(id) {
        var allUsers = this.getAll()
        return _.find(allUsers, { id: id })
    },
    getAll() {
        var users = sessionStorage.getItem(this.storageKey)
        if (users) {
            return JSON.parse(users)
        }
        else {
            users = [
                { id: 1, firstName: 'John', lastName: 'Smith', email: 'john.smith@mail.com', office: 'London', sex: true },
                { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@mail.com', office: 'Tokio', sex: false }
            ]
            this.saveAll(users)
            return users
        }
    },
    saveAll(users) {
        sessionStorage.setItem(this.storageKey, JSON.stringify(users))
    }
};