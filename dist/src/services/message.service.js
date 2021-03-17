"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const message_1 = tslib_1.__importDefault(require("../models/message"));
const getMessages = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return message_1.default.find();
});
const getMessage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return message_1.default.findById(id);
});
const createMessage = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let message = new message_1.default(Object.assign({}, input));
    let result = message.save();
    return result;
});
const updateMessage = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return message_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deleteMessage = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return message_1.default.findOneAndDelete({ _id: id });
});
exports.default = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
};
