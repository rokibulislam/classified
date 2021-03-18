"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = tslib_1.__importDefault(require("../services/auth.service"));
class AuthController {
    constructor() {
        this.login = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.service.login(req.body);
        });
        this.signup = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.service.signup(req.body);
        });
        this.service = auth_service_1.default;
    }
}
exports.default = new AuthController();
