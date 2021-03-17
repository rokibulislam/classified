import AuthService from '../services/auth.service'
import { Request, Response } from 'express';

class AuthController {
    service: any;

    constructor() {
        this.service  = AuthService;
    }

    public login = async ( req: Request, res: Response ) : Promise<any> => {
        return await this.service.login(req.body)
    }
    
    public signup = async ( req: Request, res: Response ) : Promise<any> => {
        return await this.service.signup(req.body)
    }
}

export default new AuthController()