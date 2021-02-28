"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Brand = require('../models/brand');
const getBrands = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Brand.find();
});
const getBrand = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Brand.findById(id);
});
const createBrand = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brand = new Brand(Object.assign({}, input));
    let result = brand.save();
    return result;
});
const updateBrand = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Brand.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteBrand = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Brand.findOneAndDelete({ _id: id });
});
const getbatchBrands = (brandIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const brands = yield Brand.find({ _id: { $in: brandIds } });
    return brands;
});
exports.default = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    getbatchBrands
};
