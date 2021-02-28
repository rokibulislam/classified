"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors = require('cors');
const dotEnv = require('dotenv');
const Dataloader = require('dataloader');
const elasticsearch = require('elasticsearch');
const swaggerUi = require('swagger-ui-express');
const { importSchema } = require('graphql-import');
const app = express_1.default();
const { logger } = require('./helper/logger');
const swaggerDocument = require('../swagger.json');
var options = {
    explorer: true
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
dotEnv.config();
app.use(cors());
app.use(express_1.default.json());
const { connection } = require('./database/connection');
const { elasticconnection } = require('./database/elasticconnection');
connection();
const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const { verifyUser } = require('./context');
const { getbatchUsers } = require('./services/user.service');
const { getbatchBrands } = require('./services/brand.service');
const { getbatchTags } = require('./services/tag.service');
const { getbatchCategories } = require('./services/category.service');
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const contextObj = {};
        if (req) {
            yield verifyUser(req);
            contextObj.email = req.email;
            contextObj.loggedInUserId = req.loggedInUserId;
            contextObj.esClient = esclient;
        }
        contextObj.loaders = {
            user: new Dataloader((keys) => getbatchUsers(keys)),
            brand: new Dataloader((keys) => getbatchBrands(keys)),
            tag: new Dataloader((keys) => getbatchTags(keys)),
            category: new Dataloader((keys) => getbatchCategories(keys)),
        };
        return contextObj;
    }),
    formatError: (error) => {
        return {
            message: error.message
        };
    }
});
apolloServer.applyMiddleware({
    app,
    path: '/graphql'
});
const PORT = process.env.PORT || 3001;
app.use('/', (req, res, next) => {
    res.send({ message: 'Hello' });
});
const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
});
apolloServer.installSubscriptionHandlers(httpServer);
