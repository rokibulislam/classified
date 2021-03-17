import ReviewService from '../services/review.service'
import { Request, Response } from 'express';

class ReviewController {
    service: any;
    
    constructor() {
        this.service  = ReviewService;
    }

    public getReviews = async ( req: Request, res: Response ) : Promise<any> => {
        let reviews = await this.service.getReviews()
    
        return res.send( {
            'data': reviews
        })
    }
    
    public getReview = async ( req: Request, res: Response ) : Promise<any> => {
        let review = await this.service.getReview(req.params.id)
    
        return res.send(review)
    }
    
    public createReview = async ( req: Request, res: Response ) : Promise<any> => {
        let review = await this.service.createReview(req.body)
    
        return res.send(review)
    }
    
    public updateReview = async ( req: Request, res: Response ) : Promise<any> => {
        let review = await this.service.updateReview(req.params.id,req.body)
        
        return res.send(review)
    }
    
    public deleteReview = async ( req: Request, res: Response ) : Promise<any> => {
        let review = await this.service.deleteReview(req.params.id)
    
        if ( !review )
            return res.status(404).send("The review with the given ID was not found.");
    
        res.send(review)
    }
}

export default new ReviewController();
