"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Complain = require('../models/complain');
const getComplains = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Complain.find();
});
const getComplain = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Complain.findById(id);
});
const createComplain = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let complain = new Complain(Object.assign({}, input));
    let result = complain.save();
    return result;
});
const updateComplain = (id, input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Complain.findOneAndDelete({ _id: id });
});
const deleteComplain = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Complain.findOneAndDelete({ _id: id });
});
exports.default = {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain
};
