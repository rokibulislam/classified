import AuthService from '../services/auth.service'
import { Request, Response } from 'express';

class AuthController {

    public login = async ( req: Request, res: Response ) : Promise<any> => {
        return await AuthService.login(req.body)
    }
    
    public signup = async ( req: Request, res: Response ) : Promise<any> => {
        return await AuthService.signup(req.body)
    }
}

export default new AuthController()

// export default {
//     login,
//     signup
// }