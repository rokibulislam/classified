"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_1 = tslib_1.__importDefault(require("../models/tag"));
class TagService {
    constructor() {
        this.getTags = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return tag_1.default.find();
        });
        this.getTag = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return tag_1.default.findById(id);
        });
        this.createTag = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tag = new tag_1.default(Object.assign({}, input));
            let result = tag.save();
            return result;
        });
        this.updateTag = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return tag_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteTag = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return tag_1.default.findOneAndDelete({ _id: id });
        });
        this.getbatchTags = (tagIds) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tags = yield tag_1.default.find({ _id: { $in: tagIds } });
            return tags;
        });
        this.bulkdeleteTag = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield tag_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new TagService();
