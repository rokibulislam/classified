import { combineResolvers } from 'graphql-resolvers';
import PackageService from '../services/package.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        packages: () : Promise<any> => PackageService.getPackages(),
        package: (_: any, { id } : { id: string } ) : Promise<any> => PackageService.getPackage(id),
    },

    Package: {

    },

    Mutation: {
        createPackage: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email } : { email: string } ) => {
            return PackageService.createPackage(input);   
        }),

        updatePackage: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string }) => {
            return PackageService.updatePackage(id, input)
        }),

        deletePackage: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string }) => {
            return PackageService.deletePackage(id)
        })
        
    }
}