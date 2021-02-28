import { combineResolvers } from 'graphql-resolvers';
import CategoryService from '../services/category.service';
import PostService from '../services/post.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        categories: () => CategoryService.getCategories(),
        category: (_: any, { id }: { id: string } ) : Promise<any> => CategoryService.getCategory(id),
    },

    Category: {
        posts: async ( parent: any, args: any ) => {
            let posts = await PostService.postbymeta({
               category: parent._id
            })

            return posts;
        },
    },

    Mutation: {
        createCategory: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email } : { email: string } ) => {
            return CategoryService.createCategory( input );
        }),

        updateCategory: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string } ) => {
            return CategoryService.updateCategory( id,input )
        }),

        deleteCategory: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return CategoryService.deleteCategory(id)
        })
    }
}