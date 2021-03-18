"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const review_service_1 = tslib_1.__importDefault(require("../services/review.service"));
class ReviewController {
    constructor() {
        this.getReviews = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let reviews = yield this.service.getReviews();
            return res.send({
                'data': reviews
            });
        });
        this.getReview = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let review = yield this.service.getReview(req.params.id);
            return res.send(review);
        });
        this.createReview = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let review = yield this.service.createReview(req.body);
            return res.send(review);
        });
        this.updateReview = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let review = yield this.service.updateReview(req.params.id, req.body);
            return res.send(review);
        });
        this.deleteReview = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let review = yield this.service.deleteReview(req.params.id);
            if (!review)
                return res.status(404).send("The review with the given ID was not found.");
            res.send(review);
        });
        this.service = review_service_1.default;
    }
}
exports.default = new ReviewController();
