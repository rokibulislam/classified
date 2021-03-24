import TagService from '../services/tag.service'
import { Request, Response } from 'express';

class TagController {
    service: any;
    
    constructor() {
        this.service  = TagService;
    }

    public getTags = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let tags = await this.service.getTags()
        
            return res.json({
                'data': tags
            })
        } catch( error ) {

        }
    }
    
    public getTag = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let tag = await this.service.getTag(req.params.id)
            
            return res.json(tag)
        } catch( error ) {

        }
    }
    
    public createTag = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let tag = await this.service.createTag(req.body)
            return res.json(tag)
        } catch( error ) {
            
        }
    }
    
    public updateTag = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let tag = await this.service.updateTag(req.params.id,req.body)
            return res.json(tag)
        } catch( error ) {

        }
    }
    
    public deleteTag = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let tag = await this.service.deleteTag(req.params.id)
        
            if ( !tag )
                return res.status(404).send("The tag with the given ID was not found.");
        
            res.json(tag)
        } catch( error ) {
            
        }
    }
}

export default new TagController();