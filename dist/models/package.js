"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('Package', packageSchema);
