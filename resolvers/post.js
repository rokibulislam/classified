const { posts, users, categories, tags, brands } =  require('../constants')
const Postmodel = require('../models/post')
module.exports = {
    
    Query: {
        posts: async () => Postmodel.find(),
        post: async (_, { id } ) => posts.find( post => post.id = id),
    },

    Post: {
        user: ( {userId } ) => users.find( user => user.id = userId )
    },

    Mutation: {
        createPost: async (_, { input } ) => {
            let post = new Postmodel({ ...input});
            let result = post.save();
            
            return result;
        },

        updatePost: async (_, { input } ) => {

        },

        deletePost: async (_, { input } ) => {

        }
    }
}