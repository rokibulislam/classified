"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const attribute_service_1 = tslib_1.__importDefault(require("../services/attribute.service"));
class AttributeController {
    constructor() {
        this.getAttributes = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let attributes = yield this.service.getAttributes();
            return res.send({
                'data': attributes
            });
        });
        this.getAttribute = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let attribute = yield this.service.getAttribute(req.params.id);
            return res.send(attribute);
        });
        this.createAttribute = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let attribute = yield this.service.createAttribute(req.body);
            return res.send(attribute);
        });
        this.updateAttribute = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let attribute = yield this.service.updateAttribute(id, req.body);
            return res.send(attribute);
        });
        this.deleteAttribute = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let attribute = yield this.service.deleteAttribute(req.params.id);
            if (!attribute)
                return res.status(404).send("The attribute with the given ID was not found.");
            return res.send(attribute);
        });
        this.service = attribute_service_1.default;
    }
}
exports.default = new AttributeController();
