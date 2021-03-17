import express from 'express';
import CategoryController from '../controller/category'
const router  = express.Router()

router.get( '/', CategoryController.getCategories);

router.get( '/:id', CategoryController.getCategory);

router.post( '/', CategoryController.createCategory);

router.put( '/', CategoryController.updateCategory);

router.delete( '/', CategoryController.deleteCategory);

export default router;