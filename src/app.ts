import express from 'express'
import { ApolloServer, gql, PubSub } from 'apollo-server-express'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'

const cors = require('cors')
const Dataloader = require('dataloader');
const elasticsearch = require('elasticsearch');
// const swaggerUi = require('swagger-ui-express');
const redis = require('redis')
const app = express();

const {logger} = require('./helper/logger');
//docs
// const swaggerDocument = require('../swagger.json');

var options = {
  explorer: true
};

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// routes 

import attributeRoutes from './routes/attribute'
import authRoutes from './routes/auth'
import brandRoutes from './routes/brand'
import categoryRoutes from './routes/category'
import complainRoutes from './routes/complain'
import couponRoutes from './routes/coupon'
import messageRoutes from './routes/message'
import packageRoutes from './routes/package'
import postsRoutes from './routes/posts'
import reviewRoutes from './routes/review'
import tagRoutes from './routes/tag'
import userRoutes from './routes/user'

app.use('/api/attribute', attributeRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/brand', brandRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/complain', complainRoutes)
app.use('/api/coupon', couponRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/package', packageRoutes)
app.use('/api/post', postsRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/tag', tagRoutes)
app.use('/api/user', userRoutes)

//set env variables
dotEnv.config();

// cors
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

const { connection } = require('./database/connection');
// const { elasticconnection } = require('./database/elasticconnection');
// const { Redisclient } = require('./database/redisconnection');

//db connectivity
connection();
// elasticconnection();
// Redisclient
// redisclient();

const esclient = new elasticsearch.Client({
    host: process.env.ELASTIC_URL,
    log: 'trace',
    apiVersion: '7.2'
});

// console.log( esclient );


// import resolvers from './resolvers';
// import typeDefs from './typeDefs';
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
        const contextObj: IContextObject = {};
        // console.log( esclient );
        if (req) {
          await verifyUser(req)
          contextObj.email = req.email;
          contextObj.loggedInUserId = req.loggedInUserId;
          contextObj.esClient = esclient;
        }

        contextObj.loaders = {
            user: new Dataloader( ( keys: any )  => UserService.getbatchUsers( keys ) ),
            brand: new Dataloader(( keys: any )  => BrandService.getbatchBrands( keys ) ),
            tag: new Dataloader(( keys: any )    => Tagservice.getbatchTags( keys ) ),
            category: new Dataloader( ( keys: any )  => CategoryService.getbatchCategories( keys ) ),
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

const PORT = process.env.PORT || 3002

app.use( '/', (req,res,next) => {
    res.send({ message: 'Hello' });
})

const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
})

apolloServer.installSubscriptionHandlers(httpServer);