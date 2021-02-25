const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')
const Dataloader = require('dataloader');
let elasticsearch = require('elasticsearch');

const app = express();

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
    host: 'http://localhost:9200',
    log: 'trace',
    apiVersion: '7.2'
});

// console.log( esclient );


const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const { verifyUser } = require('./context')

const { getbatchUsers } = require('./services/user.service')
const { getbatchBrands } = require('./services/brand.service')
const { getbatchTags } = require('./services/tag.service')
const { getbatchCategories } = require('./services/category.service')


const apolloServer =  new ApolloServer({
    typeDefs,
    resolvers,
    context: async ( { req, connection } ) => {
        const contextObj = {};
        // console.log( esclient );
        if (req) {
          await verifyUser(req)
          contextObj.email = req.email;
          contextObj.loggedInUserId = req.loggedInUserId;
          contextObj.esClient = esclient;
        }

        contextObj.loaders = {
            user: new Dataloader(keys => getbatchUsers( keys ) ),
            brand: new Dataloader(keys => getbatchBrands( keys ) ),
            tag: new Dataloader(keys => getbatchTags( keys ) ),
            category: new Dataloader(keys => getbatchCategories( keys ) ),
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