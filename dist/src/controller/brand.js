"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const brand_service_1 = tslib_1.__importDefault(require("../services/brand.service"));
class BrandController {
    constructor() {
        this.getBrands = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let brands = yield this.service.getBrands();
            return res.send({
                'data': brands
            });
        });
        this.getBrand = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let brand = yield this.service.getBrand(req.params.id);
            return res.send(brand);
        });
        this.createBrand = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let brand = yield this.service.createBrand(req.body);
            return res.send(brand);
        });
        this.updateBrand = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let brand = yield this.service.updateBrand(id, req.body);
            return res.send(brand);
        });
        this.deleteBrand = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let brand = yield this.service.deleteBrand(req.params.id);
            if (!brand)
                return res.status(404).send("The brand with the given ID was not found.");
            return res.send(brand);
        });
        this.service = brand_service_1.default;
    }
}
exports.default = new BrandController();
