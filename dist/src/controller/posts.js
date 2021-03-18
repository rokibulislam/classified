"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
class PostController {
    constructor() {
        this.getPosts = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return res.send();
        });
        this.getPost = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let post = yield this.service.getPost(req.params.id);
            return res.send(post);
        });
        this.createPost = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
        this.updatePost = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
        this.deletePost = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let post = yield this.service.deletePost(req.params.id);
            if (!post)
                return res.status(404).send("The post with the given ID was not found.");
            return res.send(post);
        });
        this.service = post_service_1.default;
    }
}
exports.default = new PostController();
