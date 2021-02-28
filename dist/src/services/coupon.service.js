"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coupon_1 = tslib_1.__importDefault(require("../models/coupon"));
const getCoupons = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return coupon_1.default.find();
});
const getCoupon = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return coupon_1.default.findById(id);
});
const createCoupon = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let coupon = new coupon_1.default(Object.assign({}, input));
    let result = coupon.save();
    return result;
});
const updateCoupon = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return coupon_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteCoupon = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return coupon_1.default.findOneAndDelete({ _id: id });
});
exports.default = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
};
