import { combineResolvers } from 'graphql-resolvers';
import tag from '../typeDefs/tag';
import TagService from '../services/tag.service';
import PostService from '../services/post.service';
import { isAuthenticated } from '../middlewares';

export default {
    Query: {
        tags: () => TagService.getTags(),
        tag: (_: any, { id }: { id: string } ) => TagService.getTag(id)
    },

    Tag: {
        posts: async ( parent : any, args : any ) => {
            let posts = await PostService.postbymeta({
               tag: parent._id
            })
            return posts;
        },
    },

    Mutation: {
        createTag: combineResolvers( isAuthenticated, async (_ : any, { input } : { input: any }, { email } : { email: any } ) => {            
            return TagService.createTag(input);
        }),

        updateTag: combineResolvers( isAuthenticated, async (_: any, { id, input }, { email } : { email: any } ) => {
            return TagService.updateTag(id,input);
        }),

        deleteTag: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: any } ) => {
            return TagService.deleteTag(id);
        })
    }
}