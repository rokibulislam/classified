const express = require('express')
const router  = express.Router();

const { getBrands, getBrand, createBrand, updateBrand, deleteBrand } = require('../controller/brand')

router.get( '/', getBrands);

router.get( '/:id', getBrand);

router.post( '/', createBrand);

router.put( '/', updateBrand);

router.delete( '/', deleteBrand);

module.exports = router;