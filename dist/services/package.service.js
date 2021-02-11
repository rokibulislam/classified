"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Package = require('../models/package');
const getPackages = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Package.find();
});
const getPackage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Package.findById(id);
});
const createPackage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Package.findById(id);
});
const updatePackage = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Package.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deletePackage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Package.findOneAndDelete({ _id: id });
});
exports.default = {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
};
