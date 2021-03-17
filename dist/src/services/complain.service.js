"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const complain_1 = tslib_1.__importDefault(require("../models/complain"));
const getComplains = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return complain_1.default.find();
});
const getComplain = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return complain_1.default.findById(id);
});
const createComplain = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complain = new complain_1.default(Object.assign({}, input));
    let result = complain.save();
    return result;
});
const updateComplain = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return complain_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteComplain = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return complain_1.default.findOneAndDelete({ _id: id });
});
const bulkdeleteComplain = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return complain_1.default.deleteMany({ _id: id });
});
exports.default = {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain,
    bulkdeleteComplain
};
