const userResolver = require('./user')
const postResolver = require('./post')
const tagResolver = require('./tag')
const categoryResolver = require('./category')
const brandResolver = require('./brand')

module.exports = [
    userResolver,
    postResolver,
    tagResolver,
    categoryResolver,
    brandResolver
]