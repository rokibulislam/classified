"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coupon_service_1 = tslib_1.__importDefault(require("../services/coupon.service"));
const getCoupons = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let coupons = yield coupon_service_1.default.getCoupons();
    return res.send({
        'data': coupons
    });
});
const getCoupon = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let coupon = yield coupon_service_1.default.getCoupon(req.params.id);
    return res.send(coupon);
});
const createCoupon = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let coupon = yield coupon_service_1.default.createCoupon(req.body);
    return res.send(coupon);
});
const updateCoupon = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let coupon = yield coupon_service_1.default.updateCoupon(id, req.body);
    return res.send(coupon);
});
const deleteCoupon = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let coupon = yield coupon_service_1.default.deleteCoupon(req.params.id);
    if (!coupon)
        return res.status(404).send("The coupon with the given ID was not found.");
    return res.send(coupon);
});
exports.default = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon
};
