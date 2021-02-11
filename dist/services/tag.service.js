"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Tag = require('../models/tag');
const getTags = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Tag.find();
});
const getTag = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Tag.findById(id);
});
const updateTag = (id, input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Tag.findById(id);
});
const createTag = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = new Tag(Object.assign({}, input));
    let result = tag.save();
    return result;
});
const deleteTag = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Tag.findOneAndDelete({ _id: id });
});
exports.default = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
};
