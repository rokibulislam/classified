"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const tag_service_1 = tslib_1.__importDefault(require("../services/tag.service"));
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        tags: () => tag_service_1.default.getTags(),
        tag: (_, { id }) => tag_service_1.default.getTag(id)
    },
    Tag: {
        posts: (parent, args) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            let posts = yield post_service_1.default.postbymeta({
                tag: parent._id
            });
            return posts;
        }),
    },
    Mutation: {
        createTag: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return tag_service_1.default.createTag(input);
        })),
        updateTag: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return tag_service_1.default.updateTag(id, input);
        })),
        deleteTag: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return tag_service_1.default.deleteTag(id);
        })),
        bulkdeleteTag: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return tag_service_1.default.deleteTag(id);
        })),
    }
};
