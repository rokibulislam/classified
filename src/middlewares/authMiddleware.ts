import { Request, Response, NextFunction } from 'express';
// import { jsonwebtoken } from 'jsonwebtoken'
// import { expressJwt } from 'express-jwt'

class AuthMiddleWare {

    // static isRequireSignIn = expressJwt({
    //     secret: process.env.JWT_SECRET,
    //     userProperty: 'auth'
    // })

    static isAdmin ( req: Request, res: Response , next: NextFunction ) {

    }

    static isAuth ( req: Request, res: Response , next: NextFunction ) {
        
    }
}