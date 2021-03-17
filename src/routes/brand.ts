import express from 'express';
import BrandController from '../controller/brand'

const router  = express.Router();

router.get( '/', BrandController.getBrands);

router.get( '/:id', BrandController.getBrand);

router.post( '/', BrandController.createBrand);

router.put( '/', BrandController.updateBrand);

router.delete( '/', BrandController.deleteBrand);

export default router;