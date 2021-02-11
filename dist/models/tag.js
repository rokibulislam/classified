"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('Tag', tagSchema);
