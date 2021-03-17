"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_1 = tslib_1.__importDefault(require("../models/tag"));
const getTags = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return tag_1.default.find();
});
const getTag = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return tag_1.default.findById(id);
});
const createTag = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = new tag_1.default(Object.assign({}, input));
    let result = tag.save();
    return result;
});
const updateTag = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return tag_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteTag = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return tag_1.default.findOneAndDelete({ _id: id });
});
const getbatchTags = (tagIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const tags = yield tag_1.default.find({ _id: { $in: tagIds } });
    return tags;
});
const bulkdeleteTag = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield tag_1.default.deleteMany({ _id: id });
});
exports.default = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
    getbatchTags,
    bulkdeleteTag
};
