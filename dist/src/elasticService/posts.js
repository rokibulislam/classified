"use strict";
const tslib_1 = require("tslib");
exports.createesPost = (esClient, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        $result = yield esClient.index({
            index: 'posts',
            body: {
                title: response.title,
                body: response.body
            }
        });
        return $result;
    }
    catch (ex) {
    }
});
exports.getesPosts = (esClient) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield esClient.search({
            index: "posts",
            body: {
                query: {
                    match_all: {}
                }
            }
        });
        results = response.hits.hits.map(function (hit) { return hit._source; });
        return results;
    }
    catch (ex) {
    }
});
