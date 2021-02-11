"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = require('jsonwebtoken');
const logger_1 = require("../utils/logger");
const user_1 = tslib_1.__importDefault(require("../models/user"));
module.exports.verifyUser = (req) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'mysecretkey');
            req.email = payload.email;
            const user = yield user_1.default.findOne({ email: payload.email });
            req.loggedInUserId = user === null || user === void 0 ? void 0 : user.id;
        }
    }
    catch (error) {
        logger_1.logger.info(error);
        throw error;
    }
});
