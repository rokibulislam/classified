"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Post = require('../models/post');
const PubSub = require('../subscription');
const { postEvents } = require('../subscription/events');
const { stringToBase64, base64ToString } = require('../helper/index');
const getPosts = (cursor, limit) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {};
        if (cursor) {
            query['_id'] = {
                '$lt': base64ToString(cursor)
            };
        }
        let posts = yield Post.find(query).sort({ _id: -1 }).limit(limit + 1);
        ;
        const hasNextPage = posts.length > limit;
        posts = hasNextPage ? posts.slice(0, -1) : posts;
        return {
            postFeed: posts,
            pageInfo: {
                nextPageCursor: hasNextPage ? stringToBase64(posts[posts.length - 1].id) : null,
                hasNextPage: hasNextPage
            }
        };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const getPost = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Post.findById(id);
});
const postbymeta = (options) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let posts = yield Post.find(options);
    return posts;
});
const createPost = (input, loggedInUserId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let post = new Post(Object.assign(Object.assign({}, input), { user: loggedInUserId }));
    let result = post.save();
    PubSub.publish(postEvents.POST_CREATED, {
        postCreated: result
    });
    return result;
});
const updatePost = (id, post) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Post.findOneAndUpdate({ _id: id }, post, { new: true });
});
const deletePost = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return Post.findOneAndDelete({ _id: id });
});
exports.default = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    postbymeta
};
