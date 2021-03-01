const redis = require('redis')
const Redisclient = redis.createClient({
    port: 6379,
    host: "127.0.0.1" 
})

Redisclient.on( 'connect', ( ) => {
    console.log("Client connected to redis");
})

Redisclient.on( 'ready', ( ) => {
    console.log("Client connected to redis and ready to use");
})

Redisclient.on( 'error', ( err ) => {
    console.log(err.message)
});

Redisclient.on( 'end', () => {
    console.log('client disconnected from redis')
});

module.exports = Redisclient