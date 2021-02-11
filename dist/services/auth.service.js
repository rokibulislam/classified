"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user_1 = tslib_1.__importDefault(require("../models/user"));
const logger_1 = require("../utils/logger");
const PubSub = require('../subscription');
const { userEvents } = require('../subscription/events');
const login = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({
            email: input.email
        });
        if (!user) {
            throw new Error('Email not found');
        }
        const ispasswordvalid = yield bcrypt.compare(input.password, user.password);
        if (!ispasswordvalid) {
            throw new Error('Incorrect Password');
        }
        const secret = process.env.JWT_SECRET_KEY || 'mysecret';
        const token = jwt.sign({
            email: user.email
        }, secret, { expiresIn: '1d' });
        return { token };
    }
    catch (error) {
        logger_1.logger.info(error);
        throw error;
    }
});
const signup = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({
            email: input.email
        });
        if (!user) {
            throw new Error('Email not found');
        }
        const ispasswordvalid = yield bcrypt.compare(input.password, user.password);
        if (!ispasswordvalid) {
            throw new Error('Incorrect Password');
        }
        const secret = process.env.JWT_SECRET_KEY || 'mysecret';
        const token = jwt.sign({
            email: user.email
        }, secret, { expiresIn: '1d' });
        return { token };
    }
    catch (error) {
        logger_1.logger.info(error);
        throw error;
    }
});
exports.default = {
    login,
    signup
};
