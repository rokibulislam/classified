const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require ('../models/user')
const PubSub = require('../subscription')
const { userEvents } = require('../subscription/events');

interface ILogin {
    email: string;
    password: string;
}

interface ISignup {
    email: string;
    password: string;
    username: string;
}

const login = async (input: ILogin): Promise<any> => {
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

const signup = async (input: ISignup): Promise<any> => {
    try {
        const user = await User.findOne( {
            email: input.email
        });

        if( user ){
            throw new Error('Email already in use' )
        }

        const hashedPassword = await bcrypt.hash(input.password, 12);
        const newUser = new User({ ...input, password: hashedPassword });
        const result = await newUser.save();
        
        PubSub.publish(userEvents.USER_CREATED, {
            userCreated: result
        });

        return result

    } catch( error ) {
        throw error;
    }
}

export default { signup, login }
