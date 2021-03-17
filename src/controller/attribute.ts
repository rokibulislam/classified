import AttributeService from '../services/attribute.service'
import { Request, Response } from 'express';

class AttributeController {
   
    public getAttributes =  async ( req: Request, res: Response ) : Promise<any> => {
        let attributes = await AttributeService.getAttributes();
    
        return res.send( 
            {
                'data': attributes
            }
        )
    }
    
    public getAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await AttributeService.getAttribute( req.params.id )
    
        return res.send( attribute )
    }
    
    public createAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await AttributeService.createAttribute(req.body)
    
        return res.send(attribute);
    }
    
    public updateAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let attribute = await AttributeService.updateAttribute( id, req.body)
    
        return res.send(attribute);
    }
    
    public deleteAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await AttributeService.deleteAttribute(req.params.id)
    
        if ( !attribute )
            return res.status(404).send("The attribute with the given ID was not found.");
    
        return res.send(attribute)
    }
}

export default new AttributeController();

// export default { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute }