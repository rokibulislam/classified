"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const message_service_1 = tslib_1.__importDefault(require("../services/message.service"));
const getMessages = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let messages = yield message_service_1.default.getMessages();
    return res.send({
        'data': messages
    });
});
const getMessage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let message = yield message_service_1.default.getMessage(req.params.id);
    return res.send(message);
});
const createMessage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let message = yield message_service_1.default.createMessage(req.body);
    return res.send(message);
});
const updateMessage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let message = yield message_service_1.default.updateMessage(id, req.body);
    return res.send(message);
});
const deleteMessage = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let message = yield message_service_1.default.deleteMessage(req.params.id);
    if (!message)
        return res.status(404).send("The message with the given ID was not found.");
    return res.send(message);
});
exports.default = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage
};
