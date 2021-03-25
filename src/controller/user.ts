import UserService from '../services/user.service'
import { Request, Response } from 'express';

class UserController {
    service: any;
    
    constructor() {
        this.service  = UserService;
    }

    public getUsers = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit = req.query.limit ? req.query.limit : 10;
            let order = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';

            let users = await this.service.getUsers( cursor, limit, sortBy, order )
            return res.json(users)
        } catch( error ) {

        }
    }
    
    public getUser = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let user = await this.service.getUser(req.params.id)
    
            if ( !user )
                return res.status(404).send("The user with the given ID was not found.");
        
            return res.json( user )
        } catch( error ) {
            
        }
    }
}

export default new UserController();