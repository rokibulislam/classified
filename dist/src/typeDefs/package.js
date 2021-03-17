"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        packages: [Package!],
        package(id: ID!): Package,
    }

    input createPackageInput {
        name: String!,
        amount: String!,
        duration: String!,
        allowedpost: String!
    }

    extend type Mutation {
        createPackage( input: createPackageInput ) : Package
        updatePackage(id: ID!, input: createPackageInput ) : Package
        deletePackage(id: ID!) : Package
        bulkdeletePackage( id: [ ID! ] ) : Package
    }

    type Package {
        id: ID!
        name: String!
        amount: String!
        duration: String!
        allowedpost: String!
    }
`;
