"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Category = require('../models/category');
const getCategories = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Category.find();
});
const getCategory = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const category = yield Category.findById(id);
    return category;
});
const createCategory = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let category = new Category(Object.assign({}, input));
    let result = category.save();
    return result;
});
const updateCategory = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Category.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteCategory = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Category.findOneAndDelete({ _id: id });
});
const getbatchCategories = (categoryIds) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const categories = yield Category.find({ _id: { $in: categoryIds } });
    return categories;
});
exports.default = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getbatchCategories
};
