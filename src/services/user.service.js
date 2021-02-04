const User = require ('../models/user')

const getUsers = async () => {
    return User.find()
}

const getUser = async (id) => {
    return User.findById(id)
}

module.exports = {
    getUsers,
    getUser
}
