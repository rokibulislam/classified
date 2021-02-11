const Review = require ('../models/review')

const getReviews = async () => {
    return Review.find()
}

const getReview = async (id) => {
    return Review.findById(id)
}

const createReview = async ( input ) => {
    let review = new Review({ ...input});
    let result = review.save();
    
    return result
}

const updateReview = async ( id, post ) => {
    return Review.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteReview = async ( id ) => {
    return Review.findOneAndDelete( { _id: id } )
}

module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
}
