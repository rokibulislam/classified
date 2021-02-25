module.exports.createesPost = async ( esClient, response ) => {
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