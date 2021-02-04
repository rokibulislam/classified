const Post = require ('../models/post')
const PubSub = require('../subscription')
const { postEvents } = require('../subscription/events');

const getPosts = async () => {
    return Post.find()
}

const getPost = async (id) => {
    return Post.findById(id)
}

const createPost = async ( input ) => {
    let post = new Post({ ...input});
    let result = post.save();
    
    PubSub.publish(postEvents.POST_CREATED, {
        postCreated: result
    });

    return result
}

const updatePost = async ( id, post ) => {
    return Post.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deletePost = async ( id ) => {
    return Post.findOneAndDelete( { _id: id } )
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}
