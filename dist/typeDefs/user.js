"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
  extend type Query {
    users: [User!]
    user: User
  }

  type Token {
    token: String!
  }

  input signupInput {
    name: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }

  input createUserInput {
    name: String!
    email: String!
  }

  extend type Mutation {
    createUser(input: createUserInput): User
    updateUser(id: ID!, input: createUserInput): User
    deleteUser(id: ID!): User
    signup(input: signupInput): User
    login(input: loginInput): Token
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }

  extend type Subscription {
    userCreated: User
  }
`;
