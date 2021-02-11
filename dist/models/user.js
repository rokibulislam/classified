"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
})(Role || (Role = {}));
var Permission;
(function (Permission) {
    Permission[Permission["USER"] = 0] = "USER";
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
})(Permission || (Permission = {}));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'superadmin']
    },
    permission: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'superadmin']
    },
    posts: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('User', userSchema);
