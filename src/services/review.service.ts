import Review from '../models/review'

class ReviewService {
    
    public getReviews = async () : Promise<any> => {
        return Review.find()
    }
    
    public getReview = async ( id: string ) : Promise<any> => {
        return Review.findById(id)
    }
    
    public createReview = async ( input: any ) : Promise<any> => {
        let review = new Review({ ...input});
        let result = review.save();
        
        return result
    }
    
    public updateReview = async (id: string, post: any): Promise<any> => {
        return Review.findOneAndUpdate( { _id: id }, post, { new: true } )
    }
    
    public deleteReview = async ( id: string ) : Promise<any> => {
        return Review.findOneAndDelete( { _id: id } )
    }
    
    public bulkdeleteReview = async ( id: string ) : Promise<any> => {
        return Review.deleteMany({ _id: id })
    }    
}

export default new ReviewService()

/*
export default {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
    bulkdeleteReview
}
*/
