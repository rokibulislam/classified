const Post = require ('../models/post')
const PubSub = require('../subscription')
const { postEvents } = require('../subscription/events');

const getPosts = async () => {
    let posts = await Post.find();
    return posts
}

const getPost = async (id) => {
    return Post.findById(id)
}

/**  get post by category, tag ,brand , table column */
const postbymeta = async ( options ) => {
    console.log( options );
    let posts = await Post.find( options );
    return posts
}


const createPost = async ( input, loggedInUserId ) => {
    let post = new Post({ ...input, user: loggedInUserId });
    let result = post.save();

    PubSub.publish(postEvents.POST_CREATED, {
        postCreated: result
    });

    return result
}

const updatePost = async ( id, post ) => {
    console.log( 'post update ');
    console.log( post );
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
    postbymeta
}
