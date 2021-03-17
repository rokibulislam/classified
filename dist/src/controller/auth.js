"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = tslib_1.__importDefault(require("../services/auth.service"));
const login = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield auth_service_1.default.login(req.body);
});
const signup = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield auth_service_1.default.signup(req.body);
});
exports.default = {
    login,
    signup
};
