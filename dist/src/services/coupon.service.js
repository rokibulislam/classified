"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coupon_1 = tslib_1.__importDefault(require("../models/coupon"));
class CouponController {
    constructor() {
        this.getCoupons = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return coupon_1.default.find();
        });
        this.getCoupon = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return coupon_1.default.findById(id);
        });
        this.createCoupon = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let coupon = new coupon_1.default(Object.assign({}, input));
            let result = coupon.save();
            return result;
        });
        this.updateCoupon = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return coupon_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteCoupon = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return coupon_1.default.findOneAndDelete({ _id: id });
        });
        this.bulkdeleteCoupon = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return coupon_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new CouponController();
