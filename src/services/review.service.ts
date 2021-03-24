import Review from '../models/review'

class ReviewService {
    
    public getReviews = async () : Promise<any> => {
        try {
            let reviews = await Review.find()
            return reviews
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
            let result = review.save();
        
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