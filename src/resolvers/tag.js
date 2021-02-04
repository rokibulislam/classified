const { posts, users, categories, tags, brands } =  require('../constants');
const tag = require('../typeDefs/tag');
const Tagmodel = require('../models/tag')
const TagService = require('../services/tag.service')

module.exports = {
    
    Query: {
        tags: () => TagService.getTags(),
        tag: (_, { id } ) => TagService.getTag(id)
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
            return TagService.createTag(input);
        },

        updateTag: async (_, { input } ) => {

        },

        deleteTag: async (_, { input } ) => {

        }
    }
}