"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const package_1 = tslib_1.__importDefault(require("../models/package"));
class PackageService {
    constructor() {
        this.getPackages = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return package_1.default.find();
        });
        this.getPackage = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return package_1.default.findById(id);
        });
        this.createPackage = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let pack = new package_1.default(Object.assign({}, input));
            let result = pack.save();
            return result;
        });
        this.updatePackage = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return package_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deletePackage = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return package_1.default.findOneAndDelete({ _id: id });
        });
        this.bulkdeletePackage = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return package_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new PackageService();
