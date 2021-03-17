"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const brand_1 = tslib_1.__importDefault(require("../models/brand"));
const getBrands = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return brand_1.default.find();
});
const getBrand = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return brand_1.default.findById(id);
});
const createBrand = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brand = new brand_1.default(Object.assign({}, input));
    let result = brand.save();
    return result;
});
const updateBrand = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return brand_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteBrand = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return brand_1.default.findOneAndDelete({ _id: id });
});
const getbatchBrands = (brandIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const brands = yield brand_1.default.find({ _id: { $in: brandIds } });
    return brands;
});
const bulkdeleteBrand = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return brand_1.default.deleteMany({ _id: id });
});
exports.default = { getBrands, getBrand, createBrand, updateBrand, deleteBrand, getbatchBrands, bulkdeleteBrand };
