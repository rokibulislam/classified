const { posts, users, categories, tags, brands } =  require('../constants');
const tag = require('../typeDefs/tag');
const Tagmodel = require('../models/tag')

module.exports = {
    
    Query: {
        tags: () => Tagmodel.find(),
        tag: (_, { id } ) => Tagmodel.findById(id)
    },

    Tag: {
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
        createTag: async (_, { input } ) => {
            let tag = new Tagmodel({ ...input});
            let result = tag.save();
            
            return result;
        },

        updateTag: async (_, { input } ) => {

        },

        deleteTag: async (_, { input } ) => {

        }
    }
}