import 'graphql-import-node'
import * as typeDefs from './schema.graphql';

// import { typeDefs } from './index';
import { makeExecutableSchema } from 'graphql-tools';
// import resolvers from './resolverMap';

import resolvers from '../resolvers/index';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;

