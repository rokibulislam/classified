import AttributeService from '../services/attribute.service'
import { Request, Response } from 'express';

class AttributeController {
    service: any;
    
    constructor() {
        this.service  = AttributeService;
    }

    public getAttributes =  async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let attributes = await this.service.getAttributes();
            return res.json({'data': attributes })
        } catch( error ) {

        }
    }
    
    public getAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let attribute = await this.service.getAttribute( req.params.id )
            return res.send( attribute )
        } catch( error ) {

        }
    }
    
    public createAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let attribute = await this.service.createAttribute(req.body)
            return res.json(attribute);
        } catch( error ) {

        }
    }
    
    public updateAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id
            let attribute = await this.service.updateAttribute( id, req.body)
    
            return res.json(attribute);
        } catch( error ) {

        }
    }
    
    public deleteAttribute = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let attribute = await this.service.deleteAttribute(req.params.id)
    
            if ( !attribute )
                return res.status(404).send("The attribute with the given ID was not found.");
        
            return res.json(attribute)
        } catch( error ) {
            
        }
    }
}

export default new AttributeController();