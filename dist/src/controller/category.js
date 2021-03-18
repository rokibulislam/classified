"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_service_1 = tslib_1.__importDefault(require("../services/category.service"));
class CategoryController {
    constructor() {
        this.getCategories = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let categories = yield this.service.getCategories();
            return res.send({
                'data': categories
            });
        });
        this.getCategory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let category = yield this.service.getCategory(req.params.id);
            return res.send(category);
        });
        this.createCategory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let category = yield this.service.createCategory(req.body);
            return res.send(category);
        });
        this.updateCategory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let category = yield this.service.updateCategory(id, req.body);
            return res.send(category);
        });
        this.deleteCategory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let category = yield this.service.deleteCategory(req.params.id);
            if (!category)
                return res.status(404).send("The category with the given ID was not found.");
            return res.send(category);
        });
        this.service = category_service_1.default;
    }
}
exports.default = new CategoryController();
