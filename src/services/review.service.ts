import Review from '../models/review'

const getReviews = async () : Promise<any> => {
    return Review.find()
}

const getReview = async ( id: string ) : Promise<any> => {
    return Review.findById(id)
}

const createReview = async ( input: any ) : Promise<any> => {
    let review = new Review({ ...input});
    let result = review.save();
    
    return result
}

const updateReview = async (id: string, post: any): Promise<any> => {
    return Review.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteReview = async ( id: string ) : Promise<any> => {
    return Review.findOneAndDelete( { _id: id } )
}

const bulkdeleteReview = async ( id: string ) : Promise<any> => {
    return Review.deleteMany({ _id: id })
}

export default {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
    bulkdeleteReview
}

