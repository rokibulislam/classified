import express from 'express'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'

const cors = require('cors')
const app = express();
const { logger } = require('./helper/logger');

var options = {
  explorer: true
};

//set env variables
dotEnv.config();
// cors
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { connection } = require('./database/connection');
//db connectivity
connection();

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


import apolloServer from './gapollo'

apolloServer.applyMiddleware({
    app,
    path: '/graphql'
})

const PORT = process.env.PORT || 3002

app.get( '/', (req,res,next) => {
    res.send({ message: 'Hello' });
})


app.post('/', (req, res) => {
	res.send('Hello World!');
})

const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
})

apolloServer.installSubscriptionHandlers(httpServer);