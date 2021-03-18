"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const subscription_1 = tslib_1.__importDefault(require("../subscription"));
const events_1 = tslib_1.__importDefault(require("../subscription/events"));
const user_1 = tslib_1.__importDefault(require("../models/user"));
class AuthService {
    constructor() {
        this.login = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findOne({
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
        this.signup = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findOne({
                    email: input.email
                });
                if (user) {
                    throw new Error('Email already in use');
                }
                const hashedPassword = yield bcrypt.hash(input.password, 12);
                const newUser = new user_1.default(Object.assign(Object.assign({}, input), { password: hashedPassword }));
                const result = yield newUser.save();
                subscription_1.default.publish(events_1.default.USER_CREATED, {
                    userCreated: result
                });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new AuthService();
