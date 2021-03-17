"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const review_service_1 = tslib_1.__importDefault(require("../services/review.service"));
const getReviews = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let reviews = yield review_service_1.default.getReviews();
    return res.send({
        'data': reviews
    });
});
const getReview = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let review = yield review_service_1.default.getReview(req.params.id);
    return res.send(review);
});
const createReview = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let review = yield review_service_1.default.createReview(req.body);
    return res.send(review);
});
const updateReview = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let review = yield review_service_1.default.updateReview(req.params.id, req.body);
    return res.send(review);
});
const deleteReview = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let review = yield review_service_1.default.deleteReview(req.params.id);
    if (!review)
        return res.status(404).send("The review with the given ID was not found.");
    res.send(review);
});
exports.default = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
};
