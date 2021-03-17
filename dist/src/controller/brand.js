"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const brand_service_1 = tslib_1.__importDefault(require("../services/brand.service"));
const getBrands = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brands = yield brand_service_1.default.getBrands();
    return res.send({
        'data': brands
    });
});
const getBrand = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brand = yield brand_service_1.default.getBrand(req.params.id);
    return res.send(brand);
});
const createBrand = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brand = yield brand_service_1.default.createBrand(req.body);
    return res.send(brand);
});
const updateBrand = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let brand = yield brand_service_1.default.updateBrand(id, req.body);
    return res.send(brand);
});
const deleteBrand = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let brand = yield brand_service_1.default.deleteBrand(req.params.id);
    if (!brand)
        return res.status(404).send("The brand with the given ID was not found.");
    return res.send(brand);
});
exports.default = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
};
