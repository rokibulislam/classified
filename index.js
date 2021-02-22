const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')
const Dataloader = require('dataloader');

const app = express();

//set env variables
dotEnv.config();

//cors
app.use(cors())
app.use(express.json())

const { connection } = require('./src/database/connection');

//db connectivity
connection();

const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');
const { verifyUser } = require('./src/context')

const { getbatchUsers } = require('./src/services/user.service')
const { getbatchBrands } = require('./src/services/brand.service')
const { getbatchTags } = require('./src/services/tag.service')
const { getbatchCategories } = require('./src/services/category.service')


const apolloServer =  new ApolloServer({
    typeDefs,
    resolvers,
    context: async ( { req, connection } ) => {
        const contextObj = {};

        if (req) {
          await verifyUser(req)
          contextObj.email = req.email;
          contextObj.loggedInUserId = req.loggedInUserId;
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

const PORT = process.env.PORT || 3000

app.use( '/', (req,res,next) => {
    res.send({ message: 'Hello' });
})

const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
})

apolloServer.installSubscriptionHandlers(httpServer);