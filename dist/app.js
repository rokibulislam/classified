"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const logger_1 = require("./utils/logger");
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotEnv = require('dotenv');
const app = express_1.default();
dotEnv.config();
app.use(cors());
app.use(express_1.default.json());
const connection_1 = require("./database/connection");
connection_1.connection();
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');
const { verifyUser } = require('./src/context');
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const contextObj = {};
        if (req) {
            yield verifyUser(req);
            contextObj.email = req.email;
            contextObj.loggedInUserId = req.loggedInUserId;
        }
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
const PORT = process.env.PORT || 3000;
app.use('/', (req, res, next) => {
    res.send({ message: 'Hello' });
});
const httpServer = app.listen(PORT, () => {
    logger_1.logger.info(`Server listening on PORT: ${PORT}`);
    logger_1.logger.info(`Graphql Endpoint: ${PORT}`);
});
apolloServer.installSubscriptionHandlers(httpServer);
