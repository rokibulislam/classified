const userResolver = require('./user')
const postResolver = require('./post')
const tagResolver = require('./tag')
const categoryResolver = require('./category')
const brandResolver = require('./brand')
const packageResolver = require('./package')
const complainResolver = require('./complain')

module.exports = [
    userResolver,
    postResolver,
    tagResolver,
    categoryResolver,
    brandResolver,
    packageResolver,
    complainResolver
]