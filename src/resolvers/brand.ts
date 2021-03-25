import { combineResolvers } from 'graphql-resolvers';
import BrandService from '../services/brand.service';
import PostService from '../services/post.service';
import { isAuthenticated } from '../middlewares';
import order from '../controller/order';

export default {
    
    Query: {
        brands: async ( _: any,{ cursor, limit = 10, sortBy="_id", order="asc" } : { cursor: any, limit: number, sortBy: string ,order: string } ) => BrandService.getBrands(cursor,limit, sortBy, order),
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
        }),

        bulkdeleteBrand: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return BrandService.bulkdeleteBrand(id)
        })
    }
}