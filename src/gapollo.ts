import { ApolloServer, gql, PubSub } from 'apollo-server-express'
import dataloader from 'dataloader';

const elasticsearch = require('elasticsearch');

const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});

import schema from './typeDefs/schema';
import { verifyUser } from './context'

const UserService = require('./services/user.service')
const BrandService  = require('./services/brand.service')
const Tagservice  = require('./services/tag.service')
const CategoryService = require('./services/category.service')

interface IContextObject {
    email?: string;
    loggedInUserId?: string;
    loaders?: any;
    esClient?: any
}

 const apolloServer =  new ApolloServer({
    schema,
    context: async ( { req, connection } ) => {
        console.log( req );
        const contextObj: IContextObject = {};
        if (req) {
          await verifyUser(req)
        //   contextObj.email = req.email;
        //   contextObj.loggedInUserId = req.loggedInUserId;
          contextObj.esClient = esclient;
        }

        contextObj.loaders = {
            // user: new dataloader( ( keys: any )  => UserService.getbatchUsers( keys ) ),
            // brand: new dataloader(( keys: any )  => BrandService.getbatchBrands( keys ) ),
            // tag: new dataloader(( keys: any )    => Tagservice.getbatchTags( keys ) ),
            // category: new dataloader( ( keys: any )  => CategoryService.getbatchCategories( keys ) ),
        };

        return contextObj;
    },
    formatError: (error) => {
        return {
            message: error.message
        };
    }
})

export default apolloServer