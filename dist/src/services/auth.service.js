"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const PubSub = require('../subscription');
const { userEvents } = require('../subscription/events');
const login = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({
            email: input.email
        });
        if (!user) {
            throw new Error('No User Found with This Email');
        }
        const ispasswordvalid = yield bcrypt.compare(input.password, user.password);
        if (!ispasswordvalid) {
            throw new Error('Incorrect Password');
        }
        const secret = process.env.JWT_SECRET_KEY || 'mysecret';
        const token = jwt.sign({
            email: user.email,
        }, secret, { expiresIn: '1d' });
        return { token };
    }
    catch (error) {
        throw error;
    }
});
const signup = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({
            email: input.email
        });
        if (user) {
            throw new Error('Email already in use');
        }
        const hashedPassword = yield bcrypt.hash(input.password, 12);
        const newUser = new User(Object.assign(Object.assign({}, input), { password: hashedPassword }));
        const result = yield newUser.save();
        PubSub.publish(userEvents.USER_CREATED, {
            userCreated: result
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.default = { signup, login };
