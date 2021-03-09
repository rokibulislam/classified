const ReviewService = require('../services/review.service')

const getReviews = async ( req, res ) => {
    let reviews = await ReviewService.getReviews()

    return res.send( {
        'data': reviews
    })
}

const getReview = async ( req, res ) => {
    let review = await ReviewService.getReview(req.params.id)

    return res.send(review)
}

const createReview = async ( req, res ) => {
    let review = await ReviewService.createReview()

    return res.send(review)
}

const updateReview = async ( req, res ) => {
    let review = await ReviewService.updateReview()
    
    return res.send(review)
}

const deleteReview = async ( req, res ) => {
    let review = await ReviewService.deleteReview(req.params.id)

    if ( !review )
        return res.status(404).send("The review with the given ID was not found.");

    res.send(review)
}

module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}