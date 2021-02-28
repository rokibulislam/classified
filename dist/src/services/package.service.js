"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const package_1 = tslib_1.__importDefault(require("../models/package"));
const getPackages = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return package_1.default.find();
});
const getPackage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return package_1.default.findById(id);
});
const createPackage = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let pack = new package_1.default(Object.assign({}, input));
    let result = pack.save();
    return result;
});
const updatePackage = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return package_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deletePackage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return package_1.default.findOneAndDelete({ _id: id });
});
exports.default = {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage,
};
