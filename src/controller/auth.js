const AuthService = require('../services/auth.service')

const login = async ( req, res ) => {
    return await AuthService.login(req.body)
}

const signup = async ( req, res ) => {
    return await AuthService.signup(req.body)
}

module.exports = {
    login,
    signup
}