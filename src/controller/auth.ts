import AuthService from '../services/auth.service'
import { Request, Response } from 'express';

const login = async ( req: Request, res: Response ) : Promise<any> => {
    return await AuthService.login(req.body)
}

const signup = async ( req: Request, res: Response ) : Promise<any> => {
    return await AuthService.signup(req.body)
}

export default {
    login,
    signup
}