const express = require('express')
const router  = express.Router()

const { getReviews, getReview, createReview, updateReview, deleteReview } = require('../controller/review')

router.get( '/', getReviews);

router.get( '/:id', getReview);

router.post( '/', createReview);

router.put( '/', updateReview);

router.delete( '/', deleteReview);

module.exports = router;