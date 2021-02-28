"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const packageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    allowedpost: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Package', packageSchema);
