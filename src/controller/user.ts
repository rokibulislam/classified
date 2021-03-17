import UserService from '../services/user.service'
import { Request, Response } from 'express';

class UserController {
    service: any;
    
    constructor() {
        this.service  = UserService;
    }

    public getUsers = async ( req: Request, res: Response ) : Promise<any> => {
        // let users = await this.service.getUsers()
        return res.send()
    }
    
    public getUser = async ( req: Request, res: Response ) : Promise<any> => {
        let user = await this.service.getUser(req.params.id)
    
        if ( !user )
            return res.status(404).send("The user with the given ID was not found.");
    
        return res.send( user )
    }
}

export default new UserController();