"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const getPosts = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return res.send();
});
const getPost = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let post = yield post_service_1.default.getPost(req.params.id);
    return res.send(post);
});
const createPost = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
});
const updatePost = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
});
const deletePost = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let post = yield post_service_1.default.deletePost(req.params.id);
    if (!post)
        return res.status(404).send("The post with the given ID was not found.");
    return res.send(post);
});
exports.default = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};
