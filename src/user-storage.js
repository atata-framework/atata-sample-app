﻿module.exports = {
    getAll() {
        var users = sessionStorage.getItem('users')
        if (users) {
            return JSON.parse(users)
        }
        else {
            users = [
                { id: 1, firstName: 'John', lastName: 'Smith', email: 'john.smith@mail.com', location: 'London' },
                { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@mail.com', location: 'Tokio' }
            ]
            this.saveAll(users)
            return users
        }
    },
    saveAll(users) {
        sessionStorage.setItem('users', JSON.stringify(users))
    }
};