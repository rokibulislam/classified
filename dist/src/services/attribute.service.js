"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const attribute_1 = tslib_1.__importDefault(require("../models/attribute"));
const getAttributes = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return attribute_1.default.find();
});
const getAttribute = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return attribute_1.default.findById(id);
});
const createAttribute = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let attribute = new attribute_1.default(Object.assign({}, input));
    let result = attribute.save();
    return result;
});
const updateAttribute = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return attribute_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteAttribute = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return attribute_1.default.findOneAndDelete({ _id: id });
});
exports.default = { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute };
