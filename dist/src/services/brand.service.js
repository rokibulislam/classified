"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const brand_1 = tslib_1.__importDefault(require("../models/brand"));
class BrandService {
    constructor() {
        this.getBrands = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return brand_1.default.find();
        });
        this.getBrand = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return brand_1.default.findById(id);
        });
        this.createBrand = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let brand = new brand_1.default(Object.assign({}, input));
            let result = brand.save();
            return result;
        });
        this.updateBrand = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return brand_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteBrand = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return brand_1.default.findOneAndDelete({ _id: id });
        });
        this.getbatchBrands = (brandIds) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const brands = yield brand_1.default.find({ _id: { $in: brandIds } });
            return brands;
        });
        this.bulkdeleteBrand = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return brand_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new BrandService();
