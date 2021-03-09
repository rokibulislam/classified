const PostService = require('../services/post.service')

const getPosts = async ( req, res ) => {
    let posts = await PostService.getPosts();

    return res.send({
        'data': posts
    })
}

const getPost = async ( req, res ) => {
    let post = await PostService.getPost(req.params.id);

    return res.send(post)
}

const createPost = async ( req, res ) => {
    let post = await PostService.createPost(req.body);

    return res.send(post)
}


const updatePost = async ( req, res ) => {
    let post = await PostService.updatePost(req.body);

    return res.send(post)
}

const deletePost = async ( req, res ) => {
    let post = await PostService.deletePost(req.params.id)

    if ( !post )
        return res.status(404).send("The post with the given ID was not found.");

    return res.send(post)
}   

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}