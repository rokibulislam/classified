"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const attribute_service_1 = tslib_1.__importDefault(require("../services/attribute.service"));
const getAttributes = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let attributes = yield attribute_service_1.default.getAttributes();
    return res.send({
        'data': attributes
    });
});
const getAttribute = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let attribute = yield attribute_service_1.default.getAttribute(req.params.id);
    return res.send(attribute);
});
const createAttribute = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let attribute = yield attribute_service_1.default.createAttribute(req.body);
    return res.send(attribute);
});
const updateAttribute = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let attribute = yield attribute_service_1.default.updateAttribute(id, req.body);
    return res.send(attribute);
});
const deleteAttribute = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let attribute = yield attribute_service_1.default.deleteAttribute(req.params.id);
    if (!attribute)
        return res.status(404).send("The attribute with the given ID was not found.");
    return res.send(attribute);
});
exports.default = { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute };
