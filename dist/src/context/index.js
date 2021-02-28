"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = void 0;
const tslib_1 = require("tslib");
const jwt = require('jsonwebtoken');
const user_1 = tslib_1.__importDefault(require("../models/user"));
const verifyUser = (req) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'mysecretkey');
            req.email = payload.email;
            const user = yield user_1.default.findOne({ email: payload.email });
            req.loggedInUserId = user.id;
        }
    }
    catch (error) {
        throw error;
    }
});
exports.verifyUser = verifyUser;
