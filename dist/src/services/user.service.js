"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User = require('../models/user');
const { stringToBase64, base64ToString } = require('../helper/index');
const getUsers = (cursor, limit) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {};
        if (cursor) {
            query['_id'] = {
                '$lt': base64ToString(cursor)
            };
        }
        let users = yield User.find(query).sort({ _id: -1 }).limit(limit + 1);
        ;
        const hasNextPage = users.length > limit;
        users = hasNextPage ? users.slice(0, -1) : users;
        return {
            userFeed: users,
            pageInfo: {
                nextPageCursor: hasNextPage ? stringToBase64(users[users.length - 1].id) : null,
                hasNextPage: hasNextPage
            }
        };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const getUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return User.findById(id);
});
const getbatchUsers = (userIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find({ _id: { $in: userIds } });
    return users;
});
exports.default = {
    getUsers,
    getUser,
    getbatchUsers
};
