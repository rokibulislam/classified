"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const user_service_1 = tslib_1.__importDefault(require("../services/user.service"));
const getUsers = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return res.send();
});
const getUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_service_1.default.getUser(req.params.id);
    if (!user)
        return res.status(404).send("The user with the given ID was not found.");
    return res.send(user);
});
exports.default = {
    getUsers,
    getUser
};
