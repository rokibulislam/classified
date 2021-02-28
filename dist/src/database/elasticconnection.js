"use strict";
const tslib_1 = require("tslib");
let elasticsearch = require('elasticsearch');
module.exports.elasticconnection = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const esclient = new elasticsearch.Client({
        host: 'http://localhost:9200',
        log: 'trace',
        apiVersion: '7.2'
    });
    esclient.ping({
        requestTimeout: 30000,
    }, function (error) {
        if (error) {
            console.log(error);
            console.error('Elasticsearch cluster is down!');
        }
        else {
            console.log('Everything is ok');
        }
    });
});
