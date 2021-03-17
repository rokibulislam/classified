import UserService from '../services/user.service'
import { Request, Response } from 'express';

const getUsers = async ( req: Request, res: Response ) : Promise<any> => {
    // let users = await UserService.getUsers()
    return res.send()
}

const getUser = async ( req: Request, res: Response ) : Promise<any> => {
    let user = await UserService.getUser(req.params.id)

    if ( !user )
        return res.status(404).send("The user with the given ID was not found.");

    return res.send( user )
}

export default {
    getUsers,
    getUser
}