"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_1 = tslib_1.__importDefault(require("../models/category"));
class CategoryService {
    constructor() {
        this.getCategories = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return category_1.default.find();
        });
        this.getCategory = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const category = yield category_1.default.findById(id);
            return category;
        });
        this.createCategory = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let category = new category_1.default(Object.assign({}, input));
            let result = category.save();
            return result;
        });
        this.updateCategory = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return category_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteCategory = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return category_1.default.findOneAndDelete({ _id: id });
        });
        this.getbatchCategories = (categoryIds) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categories = yield category_1.default.find({ _id: { $in: categoryIds } });
            return categories;
        });
        this.bulkdeleteCategory = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return category_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new CategoryService();
