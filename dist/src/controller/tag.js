"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_service_1 = tslib_1.__importDefault(require("../services/tag.service"));
const getTags = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tags = yield tag_service_1.default.getTags();
    return res.send({
        'data': tags
    });
});
const getTag = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = yield tag_service_1.default.getTag(req.params.id);
    return res.send(tag);
});
const createTag = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = yield tag_service_1.default.createTag(req.body);
    return res.send(tag);
});
const updateTag = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = yield tag_service_1.default.updateTag(req.params.id, req.body);
    return res.send(tag);
});
const deleteTag = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tag = yield tag_service_1.default.deleteTag(req.params.id);
    if (!tag)
        return res.status(404).send("The tag with the given ID was not found.");
    res.send(tag);
});
exports.default = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
};
