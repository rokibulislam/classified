"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const complaineSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('Complain', complaineSchema);
