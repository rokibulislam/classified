"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_service_1 = tslib_1.__importDefault(require("../services/category.service"));
const getCategories = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let categories = yield category_service_1.default.getCategories();
    return res.send({
        'data': categories
    });
});
const getCategory = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let category = yield category_service_1.default.getCategory(req.params.id);
    return res.send(category);
});
const createCategory = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let category = yield category_service_1.default.createCategory(req.body);
    return res.send(category);
});
const updateCategory = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let category = yield category_service_1.default.updateCategory(id, req.body);
    return res.send(category);
});
const deleteCategory = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let category = yield category_service_1.default.deleteCategory(req.params.id);
    if (!category)
        return res.status(404).send("The category with the given ID was not found.");
    return res.send(category);
});
exports.default = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};
