"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const complaineSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Complain', complaineSchema);
