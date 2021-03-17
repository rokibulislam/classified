"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});
const schema_1 = tslib_1.__importDefault(require("./typeDefs/schema"));
const context_1 = require("./context");
const UserService = require('./services/user.service');
const BrandService = require('./services/brand.service');
const Tagservice = require('./services/tag.service');
const CategoryService = require('./services/category.service');
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    context: ({ req, connection }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const contextObj = {};
        if (req) {
            yield context_1.verifyUser(req);
            contextObj.email = req.email;
            contextObj.loggedInUserId = req.loggedInUserId;
            contextObj.esClient = esclient;
        }
        contextObj.loaders = {
            user: new dataloader_1.default((keys) => UserService.getbatchUsers(keys)),
            brand: new dataloader_1.default((keys) => BrandService.getbatchBrands(keys)),
            tag: new dataloader_1.default((keys) => Tagservice.getbatchTags(keys)),
            category: new dataloader_1.default((keys) => CategoryService.getbatchCategories(keys)),
        };
        return contextObj;
    }),
    formatError: (error) => {
        return {
            message: error.message
        };
    }
});
