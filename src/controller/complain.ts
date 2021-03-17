import ComplainService from '../services/complain.service'
import { Request, Response } from 'express';

class ComplainController {

    public getComplains = async ( req: Request, res: Response ) : Promise<any> => {
        let complains = await ComplainService.getComplains()
    
        return res.send({
            'data': complains
        });
    }
    
    public getComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let complain = await ComplainService.getComplain(req.params.id)
    
        return res.send(complain)
    }
    
    public createComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let complain = await ComplainService.createComplain(req.body)
    
        return res.send(complain)
    }
    
    public updateComplain = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let complain = await ComplainService.updateComplain(id,req.body)
    
        return res.send(complain)
    }
    
    public deleteComplain = async( req: Request, res: Response ) : Promise<any> => {
        let complain = await ComplainService.deleteComplain(req.params.id)
    
        if ( !complain )
            return res.status(404).send("The complain with the given ID was not found.");
    
        return res.send(complain)
    }
}

export default new ComplainController();

/*
export default {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain
}
*/