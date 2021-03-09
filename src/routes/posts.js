const express = require('express')
const router  = express.Router()

const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controller/posts')


router.get( '/', getPosts);

router.get( '/:id', getPost);

router.post( '/', createPost);

router.put( '/', updatePost);

router.delete( '/', deletePost);

module.exports = router;