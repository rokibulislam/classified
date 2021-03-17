import TagService from '../services/tag.service'
import { Request, Response } from 'express';

const getTags = async ( req: Request, res: Response ) : Promise<any> => {
    let tags = await TagService.getTags()

    return res.send({
        'data': tags
    })
}

const getTag = async ( req: Request, res: Response ) : Promise<any> => {
    let tag = await TagService.getTag(req.params.id)

    return res.send(tag)
}

const createTag = async ( req: Request, res: Response ) : Promise<any> => {
    let tag = await TagService.createTag(req.body)

    return res.send(tag)
}

const updateTag = async ( req: Request, res: Response ) : Promise<any> => {
    let tag = await TagService.updateTag(req.params.id,req.body)

    return res.send(tag)
}

const deleteTag = async ( req: Request, res: Response ) : Promise<any> => {
    let tag = await TagService.deleteTag(req.params.id)

    if ( !tag )
        return res.status(404).send("The tag with the given ID was not found.");

    res.send(tag)
}

export default {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
}