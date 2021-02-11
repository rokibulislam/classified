"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({});
exports.default = mongoose.model('Payment', paymentSchema);
