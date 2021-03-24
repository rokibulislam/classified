import ComplainService from '../services/complain.service'
import { Request, Response } from 'express';

class ComplainController {
    service: any;
    
    constructor() {
        this.service  = ComplainService;
    }

    public getComplains = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let complains = await this.service.getComplains()
    
            return res.send({
                'data': complains
            });

        } catch(error) {

        }
    }
    
    public getComplain = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let complain = await this.service.getComplain(req.params.id)
    
            return res.send(complain)
        } catch(error) {

        }
    }
    
    public createComplain = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let complain = await this.service.createComplain(req.body)
            return res.send(complain)
        } catch(error) {

        }
    }
    
    public updateComplain = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id
            let complain = await this.service.updateComplain(id,req.body)
            
            return res.send(complain)
        } catch(error) {

        }
    }
    
    public deleteComplain = async( req: Request, res: Response ) : Promise<any> => {
        try {   
            let complain = await this.service.deleteComplain(req.params.id)
        
            if ( !complain )
                return res.status(404).send("The complain with the given ID was not found.");
        
            return res.send(complain)
        } catch(error) {

        }
    }
}

export default new ComplainController();