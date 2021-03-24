import AuthService from '../services/auth.service'
import { Request, Response } from 'express';

class AuthController {
    service: any;

    constructor() {
        this.service  = AuthService;
    }

    public login = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let result = await this.service.login(req.body)
            
            return res.send({
                'data': result
            })

        } catch( error ) { 
            res.send({
                error: error
            })
        }
    }
    
    public signup = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let result = await this.service.signup(req.body)
            
            return res.send({
                'data': result
            })
        } catch( error ) { 
            res.send({
                error: error
            })
        }
    }
}

export default new AuthController()