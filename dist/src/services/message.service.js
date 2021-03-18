"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const message_1 = tslib_1.__importDefault(require("../models/message"));
class MessageController {
    constructor() {
        this.getMessages = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return message_1.default.find();
        });
        this.getMessage = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return message_1.default.findById(id);
        });
        this.createMessage = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let message = new message_1.default(Object.assign({}, input));
            let result = message.save();
            return result;
        });
        this.updateMessage = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return message_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteMessage = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return message_1.default.findOneAndDelete({ _id: id });
        });
    }
}
exports.default = new MessageController();
