const { GraphQLDateTime } = require('graphql-iso-date')
import userResolver from './user'
import postResolver from './post'
import tagResolver from './tag'
import categoryResolver from './category'
import brandResolver from './brand'
import packageResolver from './package'
import complainResolver from './complain'
import reviewResolver from './review'
import attributeResolver from './attribute'
import couponResolver from './coupon'

const customDateScalarResolver = {
    Date: GraphQLDateTime
}

const resolvers = [
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

export default resolvers