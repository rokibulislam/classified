let elasticsearch = require('elasticsearch');

module.exports.elasticconnection = async () => {

    const esclient = new elasticsearch.Client({
        host: 'http://localhost:9200',
        log: 'trace',
        apiVersion: '7.2'
    });

    // ping the client to be sure Elasticsearch is up
    esclient.ping({
        requestTimeout: 30000,
    }, function(error) {
    // at this point, eastic search is down, please check your Elasticsearch service
        if (error) {
             console.log( error);
            console.error('Elasticsearch cluster is down!');
        } else {
            console.log('Everything is ok');
        }
    });

} 