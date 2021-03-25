const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

import PubSub from '../subscription'
import Events from '../subscription/events';
import User from '../models/user'


interface ILogin {
    email: string;
    password: string;
}

interface ISignup {
    email: string;
    password: string;
    // username: string;
    name: string;
}

class AuthService {

    public login = async (input: ILogin): Promise<any> => {
        try {
            const user = await User.findOne( {
                email: input.email
            });

            if( !user ){
                throw new Error('No User Found with This Email' )
            }

            const ispasswordvalid =  await bcrypt.compare(input.password, user.password)
            
            if( !ispasswordvalid ) {
                throw new Error('Incorrect Password');
            }
            
            const secret = process.env.JWT_SECRET_KEY || 'mysecret';

            const token = jwt.sign({
                email: user.email,
            },  secret, { expiresIn: '1d' })
            
            return { token }
        } catch( error ) { 
            throw error
        }
    }

    public signup = async (input: ISignup): Promise<any> => {
        try {

            const user = await User.findOne( {
                email: input.email
            });

            if( user ){
                console.log(user)
                throw new Error('Email already in use' )
            }

            const hashedPassword = await bcrypt.hash(input.password, 12);
            const newUser = new User({ ...input, password: hashedPassword });
            const result = await newUser.save();
            const { password, ...data }= result.toJSON()
            // PubSub.publish(Events.USER_CREATED, {
            //     userCreated: result
            // });

            return data

        } catch( error ) {
            throw error;
        }
    }

}

export default new AuthService()
