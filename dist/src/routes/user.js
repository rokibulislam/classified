"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_1 = tslib_1.__importDefault(require("../controller/user"));
const router = express_1.default.Router();
router.get('/', user_1.default.getUsers);
router.get('/:id', user_1.default.getUser);
exports.default = router;
