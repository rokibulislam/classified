import PostService from '../services/post.service'
import { Request, Response } from 'express';

class PostController {
    service: any;
    
    constructor() {
        this.service  = PostService;
    }
    
    public getPosts = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            // let posts = await this.service.getPosts();
            return res.send()
        } catch( error ) {

        }
    }

    public getPost = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let post = await this.service.getPost(req.params.id);
            return res.send(post)
        } catch( error ) {

        }
    }

    public createPost = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            // let post = await this.service.createPost(req.body);
            // return res.send(post)
        } catch( error ) {

        }
    }


    public updatePost = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            // let post = await this.service.updatePost(req.body);
            // return res.send(post)
        } catch( error ) {

        }
    }

    public deletePost = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let post = await this.service.deletePost(req.params.id)

            if ( !post )
                return res.status(404).send("The post with the given ID was not found.");

            return res.send(post)
        } catch( error ) {

        }
    }  
}

export default new PostController();