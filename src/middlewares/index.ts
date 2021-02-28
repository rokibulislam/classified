const { skip } = require('graphql-resolvers')

export const isAuthenticated = ( _: any, __: any, { email } : { email: string } ) => {  
    if( !email ) {
        throw new Error('Access Denied! Please login to continue')
    }

    return skip
}