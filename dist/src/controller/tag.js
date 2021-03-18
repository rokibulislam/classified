"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tag_service_1 = tslib_1.__importDefault(require("../services/tag.service"));
class TagController {
    constructor() {
        this.getTags = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tags = yield this.service.getTags();
            return res.send({
                'data': tags
            });
        });
        this.getTag = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tag = yield this.service.getTag(req.params.id);
            return res.send(tag);
        });
        this.createTag = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tag = yield this.service.createTag(req.body);
            return res.send(tag);
        });
        this.updateTag = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tag = yield this.service.updateTag(req.params.id, req.body);
            return res.send(tag);
        });
        this.deleteTag = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let tag = yield this.service.deleteTag(req.params.id);
            if (!tag)
                return res.status(404).send("The tag with the given ID was not found.");
            res.send(tag);
        });
        this.service = tag_service_1.default;
    }
}
exports.default = new TagController();
