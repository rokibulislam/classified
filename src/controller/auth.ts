import AuthService from '../services/auth.service'
import { Request, Response } from 'express';

class AuthController {
    service: any;

    constructor() {
        this.service  = AuthService;
    }

    public login = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            return await this.service.login(req.body)
        } catch( error ) { 
            res.send({
                error: error
            })
        }
    }
    
    public signup = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            return await this.service.signup(req.body)
        } catch( error ) { 
            res.send({
                error: error
            })
        }
    }
}

export default new AuthController()