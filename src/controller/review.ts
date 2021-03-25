import ReviewService from '../services/review.service'
import { Request, Response } from 'express';

class ReviewController {
    service: any;
    
    constructor() {
        this.service  = ReviewService;
    }

    public getReviews = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit = req.query.limit ? req.query.limit : 10;
            let order = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
            
            let reviews = await this.service.getReviews( cursor, limit, sortBy, order )
    
            return res.json( {
                'data': reviews
            })
        } catch( error ) {

        }
    }
    
    public getReview = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let review = await this.service.getReview(req.params.id)
            return res.json(review)
        } catch( error ) {

        }
    }
    
    public createReview = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let review = await this.service.createReview(req.body)
            return res.json(review)
        } catch( error ) {

        }
    }
    
    public updateReview = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let review = await this.service.updateReview(req.params.id,req.body)
            return res.json(review)
        } catch( error ) {

        }
    }
    
    public deleteReview = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let review = await this.service.deleteReview(req.params.id)
    
            if ( !review )
                return res.status(404).send("The review with the given ID was not found.");
        
            res.json(review)
        } catch( error ) {
            
        }
    }
}

export default new ReviewController();
