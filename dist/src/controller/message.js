"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const message_service_1 = tslib_1.__importDefault(require("../services/message.service"));
class MessageController {
    constructor() {
        this.getMessages = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let messages = yield this.service.getMessages();
            return res.send({
                'data': messages
            });
        });
        this.getMessage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let message = yield this.service.getMessage(req.params.id);
            return res.send(message);
        });
        this.createMessage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let message = yield this.service.createMessage(req.body);
            return res.send(message);
        });
        this.updateMessage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let message = yield this.service.updateMessage(id, req.body);
            return res.send(message);
        });
        this.deleteMessage = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let message = yield this.service.deleteMessage(req.params.id);
            if (!message)
                return res.status(404).send("The message with the given ID was not found.");
            return res.send(message);
        });
        this.service = message_service_1.default;
    }
}
exports.default = new MessageController();
