const { GraphQLDateTime } = require('graphql-iso-date')
const userResolver = require('./user')
const postResolver = require('./post')
const tagResolver = require('./tag')
const categoryResolver = require('./category')
const brandResolver = require('./brand')
const packageResolver = require('./package')
const complainResolver = require('./complain')
const reviewResolver = require('./review')
const attributeResolver = require('./attribute')
const couponResolver = require('./coupon')

const customDateScalarResolver = {
    Date: GraphQLDateTime
}

module.exports = [
    userResolver,
    postResolver,
    tagResolver,
    categoryResolver,
    brandResolver,
    packageResolver,
    complainResolver,
    reviewResolver,
    attributeResolver,
    couponResolver,
    customDateScalarResolver
]