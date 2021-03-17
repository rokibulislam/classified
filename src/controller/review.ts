import ReviewService from '../services/review.service'
import { Request, Response } from 'express';

const getReviews = async ( req: Request, res: Response ) : Promise<any> => {
    let reviews = await ReviewService.getReviews()

    return res.send( {
        'data': reviews
    })
}

const getReview = async ( req: Request, res: Response ) : Promise<any> => {
    let review = await ReviewService.getReview(req.params.id)

    return res.send(review)
}

const createReview = async ( req: Request, res: Response ) : Promise<any> => {
    let review = await ReviewService.createReview(req.body)

    return res.send(review)
}

const updateReview = async ( req: Request, res: Response ) : Promise<any> => {
    let review = await ReviewService.updateReview(req.params.id,req.body)
    
    return res.send(review)
}

const deleteReview = async ( req: Request, res: Response ) : Promise<any> => {
    let review = await ReviewService.deleteReview(req.params.id)

    if ( !review )
        return res.status(404).send("The review with the given ID was not found.");

    res.send(review)
}

export default {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}