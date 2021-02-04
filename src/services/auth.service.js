const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require ('../models/user')

const login = async ( input ) => {
    try {
        const user = await User.findOne( {
            email: input.email
        });

        if( !user ){
            throw new Error('Email not found' )
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
        console.log( error ) 
        throw error
    }
}

const signup = async ( input ) => {
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
        
        return result

    } catch( error ) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    signup,
    login
}
