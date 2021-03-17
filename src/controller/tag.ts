import TagService from '../services/tag.service'
import { Request, Response } from 'express';

class TagController {
    
    public getTags = async ( req: Request, res: Response ) : Promise<any> => {
        let tags = await TagService.getTags()
    
        return res.send({
            'data': tags
        })
    }
    
    public getTag = async ( req: Request, res: Response ) : Promise<any> => {
        let tag = await TagService.getTag(req.params.id)
    
        return res.send(tag)
    }
    
    public createTag = async ( req: Request, res: Response ) : Promise<any> => {
        let tag = await TagService.createTag(req.body)
    
        return res.send(tag)
    }
    
    public updateTag = async ( req: Request, res: Response ) : Promise<any> => {
        let tag = await TagService.updateTag(req.params.id,req.body)
    
        return res.send(tag)
    }
    
    public deleteTag = async ( req: Request, res: Response ) : Promise<any> => {
        let tag = await TagService.deleteTag(req.params.id)
    
        if ( !tag )
            return res.status(404).send("The tag with the given ID was not found.");
    
        res.send(tag)
    }
}

export default new TagController();

/*
export default {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
}
*/