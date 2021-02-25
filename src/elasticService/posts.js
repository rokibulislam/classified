exports.createesPost = async ( esClient, response ) => {
    try {
        $result = await esClient.index({
            index: 'posts',
            body: {
                title: response.title,
                body: response.body
            }
        })

        return $result;
    
    } catch( ex ) {

    }
}


exports.getesPosts = async( esClient ) => {
    try {
            
        let response = await esClient.search({
            index: "posts",
            body: {
                query: {
                    match_all: {}
                }
            }
        })
        
        results = response.hits.hits.map(function(hit){ return hit._source });
        return results
    } catch( ex ) {

    }
} 