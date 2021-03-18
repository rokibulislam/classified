"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const complain_service_1 = tslib_1.__importDefault(require("../services/complain.service"));
class ComplainController {
    constructor() {
        this.getComplains = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let complains = yield this.service.getComplains();
            return res.send({
                'data': complains
            });
        });
        this.getComplain = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let complain = yield this.service.getComplain(req.params.id);
            return res.send(complain);
        });
        this.createComplain = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let complain = yield this.service.createComplain(req.body);
            return res.send(complain);
        });
        this.updateComplain = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let complain = yield this.service.updateComplain(id, req.body);
            return res.send(complain);
        });
        this.deleteComplain = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let complain = yield this.service.deleteComplain(req.params.id);
            if (!complain)
                return res.status(404).send("The complain with the given ID was not found.");
            return res.send(complain);
        });
        this.service = complain_service_1.default;
    }
}
exports.default = new ComplainController();
