"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const complain_service_1 = tslib_1.__importDefault(require("../services/complain.service"));
const getComplains = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complains = yield complain_service_1.default.getComplains();
    return res.send({
        'data': complains
    });
});
const getComplain = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complain = yield complain_service_1.default.getComplain(req.params.id);
    return res.send(complain);
});
const createComplain = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complain = yield complain_service_1.default.createComplain(req.body);
    return res.send(complain);
});
const updateComplain = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let complain = yield complain_service_1.default.updateComplain(id, req.body);
    return res.send(complain);
});
const deleteComplain = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complain = yield complain_service_1.default.deleteComplain(req.params.id);
    if (!complain)
        return res.status(404).send("The complain with the given ID was not found.");
    return res.send(complain);
});
exports.default = {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain
};
