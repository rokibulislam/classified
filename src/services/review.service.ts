import Review from '../models/review'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class ReviewService {
    
    public getReviews = async ( cursor : any, limit : any, sortBy: string ,order: string ) : Promise<any> => {
        try {

            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let reviews =  await Review.find().sort({ _id: -1 }).limit( lim );

            const hasNextPage = reviews.length > limit;
            reviews = hasNextPage ? reviews.slice(0, -1) : reviews;

            return {
                reviewFeed: reviews,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(reviews[reviews.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
        } catch( error ) {

        }
    }
    
    public getReview = async ( id: string ) : Promise<any> => {
        try {
            let review = await Review.findById(id)
            return review
        } catch( error ) {

        }
    }
    
    public createReview = async ( input: any ) : Promise<any> => {
        try {
            let review = new Review({ ...input});
            let result = await review.save();
        
            return result
        } catch( error ) {

        }
    }
    
    public updateReview = async (id: string, post: any): Promise<any> => {
        try {
            let review = await Review.findOneAndUpdate( { _id: id }, post, { new: true } )
            return review
        } catch( error ) {

        }
    }
    
    public deleteReview = async ( id: string ) : Promise<any> => {
        try {
            let review = await Review.findOneAndDelete( { _id: id } )
            return review
        } catch( error ) {

        }
    }
    
    public bulkdeleteReview = async ( id: string ) : Promise<any> => {
        try {
            let review = await Review.deleteMany({ _id: id })
            return review
        } catch( error ) {

        }
    }    
}

export default new ReviewService()