import User from '../models/user'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class UserService {

    public getUsers = async ( cursor : any, limit : any, sortBy: string ,order: string ) => {
        try {
            const query: Iquery  = { }
            
            if (cursor) {
                query['_id'] = {
                '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1
            
            let users = await User.find(query).select("-password").sort({ _id: -1 }).limit( lim );

            const hasNextPage = users.length > limit;
            users = hasNextPage ? users.slice(0, -1) : users;

            return {
                userFeed: users,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(users[users.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
        } catch( error ) {
            console.log( error )
            throw error;
        }

    }

    public getUser = async ( id: string ) : Promise<any> => {
        try {
            let user = await User.findById(id).select("-password")
            return user
        } catch( error ) {

        }
    }

    public getbatchUsers = async (userIds: any) : Promise<any> => {
        try {
            // console.log('keys====', userIds);
            const users = await User.find({ _id: { $in: userIds } }).select("-password");
            return users;
            // return userIds.map(userId => users.find(user => user.id === userId));
        } catch( error ) {

        }
    }
}

export default new UserService()