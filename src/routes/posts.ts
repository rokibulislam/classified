import express from 'express'
import PostController from '../controller/posts'
const router  = express.Router()

router.get( '/', PostController.getPosts);

router.get( '/:id', PostController.getPost);

router.post( '/', PostController.createPost);

router.put( '/', PostController.updatePost);

router.delete( '/', PostController.deletePost);

export default router;