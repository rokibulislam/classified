"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const couponSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Coupon', couponSchema);
