import PostService from '../services/post.service'
import { Request, Response } from 'express';

const getPosts = async ( req: Request, res: Response ) : Promise<any> => {
    // let posts = await PostService.getPosts();

    return res.send()
}

const getPost = async ( req: Request, res: Response ) : Promise<any> => {
    let post = await PostService.getPost(req.params.id);

    return res.send(post)
}

const createPost = async ( req: Request, res: Response ) : Promise<any> => {
    // let post = await PostService.createPost(req.body);

    // return res.send(post)
}


const updatePost = async ( req: Request, res: Response ) : Promise<any> => {
    // let post = await PostService.updatePost(req.body);

    // return res.send(post)
}

const deletePost = async ( req: Request, res: Response ) : Promise<any> => {
    let post = await PostService.deletePost(req.params.id)

    if ( !post )
        return res.status(404).send("The post with the given ID was not found.");

    return res.send(post)
}   

export default {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}