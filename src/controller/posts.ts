import PostService from '../services/post.service'
import { Request, Response } from 'express';

class PostController {

    public getPosts = async ( req: Request, res: Response ) : Promise<any> => {
        // let posts = await PostService.getPosts();

        return res.send()
    }

    public getPost = async ( req: Request, res: Response ) : Promise<any> => {
        let post = await PostService.getPost(req.params.id);

        return res.send(post)
    }

    public createPost = async ( req: Request, res: Response ) : Promise<any> => {
        // let post = await PostService.createPost(req.body);

        // return res.send(post)
    }


    public updatePost = async ( req: Request, res: Response ) : Promise<any> => {
        // let post = await PostService.updatePost(req.body);

        // return res.send(post)
    }

    public deletePost = async ( req: Request, res: Response ) : Promise<any> => {
        let post = await PostService.deletePost(req.params.id)

        if ( !post )
            return res.status(404).send("The post with the given ID was not found.");

        return res.send(post)
    }  
}

export default new PostController();

/*
export default {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}
*/