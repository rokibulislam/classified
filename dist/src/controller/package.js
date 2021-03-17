"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const package_service_1 = tslib_1.__importDefault(require("../services/package.service"));
const getPackages = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let packages = yield package_service_1.default.getPackages();
    return res.send(packages);
});
const getPackage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let packag = yield package_service_1.default.getPackage(req.params.id);
    return res.send(packag);
});
const createPackage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let packag = yield package_service_1.default.createPackage(req.body);
    res.send(packag);
});
const updatePackage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let packag = yield package_service_1.default.updatePackage(req.params.id, req.body);
    res.send(packag);
});
const deletePackage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let packag = yield package_service_1.default.deletePackage(req.params.id);
    if (!packag)
        return res.status(404).send("The package with the given ID was not found.");
    res.send(packag);
});
exports.default = {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
};
