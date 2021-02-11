"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const post_1 = tslib_1.__importDefault(require("../models/post"));
const subscription_1 = tslib_1.__importDefault(require("../subscription"));
const events_1 = require("../subscription/events");
const getPosts = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return post_1.default.find();
});
const getPost = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return post_1.default.findById(id);
});
const createPost = (input) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let post = new post_1.default(Object.assign({}, input));
    let result = post.save();
    subscription_1.default.publish(events_1.postEvents.POST_CREATED, {
        postCreated: result
    });
    return result;
});
const updatePost = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return post_1.default.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deletePost = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return post_1.default.findOneAndDelete({ _id: id });
});
exports.default = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};
