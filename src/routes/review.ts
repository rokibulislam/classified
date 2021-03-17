import express from 'express'
import ReviewController from '../controller/review'

const router  = express.Router()

router.get( '/', ReviewController.getReviews);

router.get( '/:id', ReviewController.getReview);

router.post( '/', ReviewController.createReview);

router.put( '/', ReviewController.updateReview);

router.delete( '/', ReviewController.deleteReview);

export default router;