const User = require ('../models/user')
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

const getUsers = async ( cursor : any, limit : any ) => {
    try {
        const query: Iquery  = { }
        
        if (cursor) {
            query['_id'] = {
              '$lt': base64ToString(cursor)
            }
        }

        let users = await User.find(query).sort({ _id: -1 }).limit(limit + 1);;

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

const getUser = async ( id: string ) : Promise<any> => {
    return User.findById(id)
}

const getbatchUsers = async (userIds: any) : Promise<any> => {
    // console.log('keys====', userIds);
    const users = await User.find({ _id: { $in: userIds } });
    return users;
    // return userIds.map(userId => users.find(user => user.id === userId));
}

export default {
    getUsers,
    getUser,
    getbatchUsers
}
