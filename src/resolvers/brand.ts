import { combineResolvers } from 'graphql-resolvers';
import BrandService from '../services/brand.service';
import PostService from '../services/post.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        brands: () => BrandService.getBrands(),
        brand: (_: any, { id } : { id: string } ) : Promise<any> => BrandService.getBrand(id),
    },

    Brand: {
        posts: async ( parent: any, args: any ) => {
           
            let posts = await PostService.postbymeta({
               brand: parent._id
            })

            return posts;
        },
    },

    Mutation: {
        createBrand: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email } : { email: string } ) => {
            return BrandService.createBrand(input);   
        }),

        updateBrand: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string } ) => {
            return BrandService.updateBrand( id, input )
        }),

        deleteBrand: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return BrandService.deleteBrand(id)
        })
    }
}