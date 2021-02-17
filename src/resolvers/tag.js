const { combineResolvers } = require('graphql-resolvers')
const { posts, users, categories, tags, brands } =  require('../constants');
const tag = require('../typeDefs/tag');
const Tagmodel = require('../models/tag')
const TagService = require('../services/tag.service')
const PostService = require('../services/post.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        tags: () => TagService.getTags(),
        tag: (_, { id } ) => TagService.getTag(id)
    },

    Tag: {
        posts: async ( parent, args ) => {
            let posts = await PostService.postbymeta({
               tag: parent._id
            })
            return posts;
        },
    },

    Mutation: {
        createTag: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
            return TagService.createTag(input);
        }),

        updateTag: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return TagService.updateTag(id,input);
        }),

        deleteTag: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return TagService.deleteTag(id);
        })
    }
}