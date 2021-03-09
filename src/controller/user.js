const UserService = require('../services/user.service')

const getUsers = async ( req, res ) => {
    let users = await UserService.getUsers()

    return res.send( {
        'data': users 
    })
}

const getUser = async ( req, res ) => {
    let user = await UserService.getUser(req.params.id)

    if ( !user )
        return res.status(404).send("The user with the given ID was not found.");

    return res.send( user )
}

const createUser = async ( req, res ) => {
    let user = await UserService.createUser(req.body)

    return res.send( user )
}

const updateUser = async ( req, res ) => {
    let user = await UserService.updateUser(req.body)

    return res.send( user )
}

const deleteUser = async ( req, res ) => {
    let user = await UserService.deleteUser(req.params.id)

    if ( !user )
        return res.status(404).send("The user with the given ID was not found.");

    res.send(user)
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}