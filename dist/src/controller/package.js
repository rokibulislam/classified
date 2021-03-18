"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const package_service_1 = tslib_1.__importDefault(require("../services/package.service"));
class PackageController {
    constructor() {
        this.getPackages = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let packages = yield this.service.getPackages();
            return res.send(packages);
        });
        this.getPackage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let packag = yield this.service.getPackage(req.params.id);
            return res.send(packag);
        });
        this.createPackage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let packag = yield this.service.createPackage(req.body);
            res.send(packag);
        });
        this.updatePackage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let packag = yield this.service.updatePackage(req.params.id, req.body);
            res.send(packag);
        });
        this.deletePackage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let packag = yield this.service.deletePackage(req.params.id);
            if (!packag)
                return res.status(404).send("The package with the given ID was not found.");
            res.send(packag);
        });
        this.service = package_service_1.default;
    }
}
exports.default = new PackageController();
