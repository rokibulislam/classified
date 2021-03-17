import ComplainService from '../services/complain.service'
import { Request, Response } from 'express';

class ComplainController {
    service: any;
    
    constructor() {
        this.service  = ComplainService;
    }

    public getComplains = async ( req: Request, res: Response ) : Promise<any> => {
        let complains = await this.service.getComplains()
    
        return res.send({
            'data': complains
        });
    }
    
    public getComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let complain = await this.service.getComplain(req.params.id)
    
        return res.send(complain)
    }
    
    public createComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let complain = await this.service.createComplain(req.body)
    
        return res.send(complain)
    }
    
    public updateComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let complain = await this.service.updateComplain(id,req.body)
    
        return res.send(complain)
    }
    
    public deleteComplain = async( req: Request, res: Response ) : Promise<any> => {
        let complain = await this.service.deleteComplain(req.params.id)
    
        if ( !complain )
            return res.status(404).send("The complain with the given ID was not found.");
    
        return res.send(complain)
    }
}

export default new ComplainController();