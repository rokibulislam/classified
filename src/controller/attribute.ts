import AttributeService from '../services/attribute.service'
import { Request, Response } from 'express';

class AttributeController {
    service: any;
    
    constructor() {
        this.service  = AttributeService;
    }

    public getAttributes =  async ( req: Request, res: Response ) : Promise<any> => {
        let attributes = await this.service.getAttributes();
    
        return res.send( 
            {
                'data': attributes
            }
        )
    }
    
    public getAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await this.service.getAttribute( req.params.id )
    
        return res.send( attribute )
    }
    
    public createAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await this.service.createAttribute(req.body)
    
        return res.send(attribute);
    }
    
    public updateAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let attribute = await this.service.updateAttribute( id, req.body)
    
        return res.send(attribute);
    }
    
    public deleteAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        let attribute = await this.service.deleteAttribute(req.params.id)
    
        if ( !attribute )
            return res.status(404).send("The attribute with the given ID was not found.");
    
        return res.send(attribute)
    }
}

export default new AttributeController();