const { gql } = require('apollo-server-express')

const userTypeDefs = require('./user')
const postTypeDefs = require('./post')
const categoryTypeDefs = require('./category')
const tagTypeDefs = require('./tag')
const brandTypeDefs = require('./brand')
const packageTypeDefs = require('./package')
const complainTypeDefs = require('./complain')

const typeDefs = gql`
  scalar Date
  
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription {
    _: String
  }
`;

module.exports = [
    typeDefs,
    userTypeDefs,
    postTypeDefs,
    categoryTypeDefs,
    tagTypeDefs,
    brandTypeDefs,
    packageTypeDefs,
    complainTypeDefs
]