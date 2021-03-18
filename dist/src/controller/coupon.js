"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coupon_service_1 = tslib_1.__importDefault(require("../services/coupon.service"));
class CouponController {
    constructor() {
        this.getCoupons = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let coupons = yield this.service.getCoupons();
            return res.send({
                'data': coupons
            });
        });
        this.getCoupon = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let coupon = yield this.service.getCoupon(req.params.id);
            return res.send(coupon);
        });
        this.createCoupon = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let coupon = yield this.service.createCoupon(req.body);
            return res.send(coupon);
        });
        this.updateCoupon = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let coupon = yield this.service.updateCoupon(id, req.body);
            return res.send(coupon);
        });
        this.deleteCoupon = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let coupon = yield this.service.deleteCoupon(req.params.id);
            if (!coupon)
                return res.status(404).send("The coupon with the given ID was not found.");
            return res.send(coupon);
        });
        this.service = coupon_service_1.default;
    }
}
exports.default = new CouponController();
