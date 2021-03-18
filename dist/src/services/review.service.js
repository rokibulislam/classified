"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const review_1 = tslib_1.__importDefault(require("../models/review"));
class ReviewService {
    constructor() {
        this.getReviews = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return review_1.default.find();
        });
        this.getReview = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return review_1.default.findById(id);
        });
        this.createReview = (input) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let review = new review_1.default(Object.assign({}, input));
            let result = review.save();
            return result;
        });
        this.updateReview = (id, post) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return review_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
        });
        this.deleteReview = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return review_1.default.findOneAndDelete({ _id: id });
        });
        this.bulkdeleteReview = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return review_1.default.deleteMany({ _id: id });
        });
    }
}
exports.default = new ReviewService();
