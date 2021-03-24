import UserService from '../services/user.service'
import { Request, Response } from 'express';

class UserController {
    service: any;
    
    constructor() {
        this.service  = UserService;
    }

    public getUsers = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            // let users = await this.service.getUsers()
            return res.send()
        } catch( error ) {

        }
    }
    
    public getUser = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let user = await this.service.getUser(req.params.id)
    
            if ( !user )
                return res.status(404).send("The user with the given ID was not found.");
        
            return res.send( user )
        } catch( error ) {
            
        }
    }
}

export default new UserController();