"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const attribute_1 = tslib_1.__importDefault(require("../models/attribute"));
class AttributeService {
    constructor() {
        this.getAttributes = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return attribute_1.default.find();
        });
        this.getAttribute = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return attribute_1.default.findById(id);
        });
        this.createAttribute = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let attribute = new attribute_1.default(Object.assign({}, input));
            let result = attribute.save();
            return result;
        });
        this.updateAttribute = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return attribute_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteAttribute = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return attribute_1.default.findOneAndDelete({ _id: id });
        });
        this.bulkdeleteAttribute = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return attribute_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new AttributeService();
