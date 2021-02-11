"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User = require('../models/user');
const getUsers = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return User.find();
});
const getUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return User.findById(id);
});
exports.default = {
    getUsers,
    getUser
};
