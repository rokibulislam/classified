"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const auth_1 = tslib_1.__importDefault(require("../controller/auth"));
const router = express_1.default.Router();
router.post('/login', auth_1.default.login);
router.post('/signup', auth_1.default.signup);
exports.default = router;
