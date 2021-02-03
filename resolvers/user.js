const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { posts, users, categories, tags, brands } =  require('../constants')
const UserModel = require('../models/user')

module.exports = {
    Query: {
        users: () => UserModel.find(),
        user: (_, { id } ) => UserModel.findById(id),
    },

    User: {
        posts: async ( {id } ) => {
            try {
               const posts =  posts.find( post => post.userId = id )
               return posts; 
            } catch( error ) {
                console.log( error )
                throw error
            }
        }
    },

    Mutation: {
        signup: async (_, { input } ) => {
            const hashedPassword = await bcrypt.hash(input.password, 12);
            const newUser = new UserModel({ ...input, password: hashedPassword });
            const result = await newUser.save();
            return result
        },

        login: async (_, { input } ) => {

        }
    }
}