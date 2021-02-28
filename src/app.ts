import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import mongoose from 'mongoose'
// const { ApolloServer, gql } = require('apollo-server-express')
// const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')
const Dataloader = require('dataloader');
const elasticsearch = require('elasticsearch');
const swaggerUi = require('swagger-ui-express');
const { importSchema } = require( 'graphql-import' );
const app = express();

const {logger} = require('./helper/logger');
//docs
const swaggerDocument = require('../swagger.json');

var options = {
  explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

//set env variables
dotEnv.config();

// cors
app.use(cors())
app.use(express.json())

const { connection } = require('./database/connection');
const { elasticconnection } = require('./database/elasticconnection');

//db connectivity
connection();
// elasticconnection();

const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});

// console.log( esclient );


const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const { verifyUser } = require('./context')

// const typeDefs = importSchema('./typeDefs/schema.graphql');

const { getbatchUsers } = require('./services/user.service')
const { getbatchBrands } = require('./services/brand.service')
const { getbatchTags } = require('./services/tag.service')
const { getbatchCategories } = require('./services/category.service')


interface IContextObject {
    email?: string;
    loggedInUserId?: string;
    loaders?: any;
    esClient?: any
}

const apolloServer =  new ApolloServer({
    typeDefs,
    resolvers,
    context: async ( { req } : { req: express.Request} ) : Promise<any>  => {
        const contextObj: IContextObject = {};
        if (req) {
          await verifyUser(req)
          contextObj.email = req.email;
          contextObj.loggedInUserId = req.loggedInUserId;
          contextObj.esClient = esclient;
        }

        contextObj.loaders = {
            user: new Dataloader( ( keys: any )  => getbatchUsers( keys ) ),
            brand: new Dataloader(( keys: any )  => getbatchBrands( keys ) ),
            tag: new Dataloader(( keys: any )  => getbatchTags( keys ) ),
            category: new Dataloader( ( keys: any )  => getbatchCategories( keys ) ),
        };

        return contextObj;
    },
    formatError: (error) => {
        return {
            message: error.message
        };
    }
})

apolloServer.applyMiddleware({
    app,
    path: '/graphql'
})

const PORT = process.env.PORT || 3001

app.use( '/', (req,res,next) => {
    res.send({ message: 'Hello' });
})

const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
})

apolloServer.installSubscriptionHandlers(httpServer);