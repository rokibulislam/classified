import PostService from '../services/post.service'
import { Request, Response } from 'express';

class PostController {
    service: any;
    
    constructor() {
        this.service  = PostService;
    }
    
    public getPosts = async ( req: Request, res: Response ) : Promise<any> => {
        // let posts = await this.service.getPosts();

        return res.send()
    }

    public getPost = async ( req: Request, res: Response ) : Promise<any> => {
        let post = await this.service.getPost(req.params.id);

        return res.send(post)
    }

    public createPost = async ( req: Request, res: Response ) : Promise<any> => {
        // let post = await this.service.createPost(req.body);

        // return res.send(post)
    }


    public updatePost = async ( req: Request, res: Response ) : Promise<any> => {
        // let post = await this.service.updatePost(req.body);

        // return res.send(post)
    }

    public deletePost = async ( req: Request, res: Response ) : Promise<any> => {
        let post = await this.service.deletePost(req.params.id)

        if ( !post )
            return res.status(404).send("The post with the given ID was not found.");

        return res.send(post)
    }  
}

export default new PostController();