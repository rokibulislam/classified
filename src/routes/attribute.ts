import express from 'express';
import AttributeController  from '../controller/attribute'


const router  = express.Router();

router.get( '/', AttributeController.getAttributes);

router.get( '/:id', AttributeController.getAttribute);

router.post( '/', AttributeController.createAttribute);

router.put( '/', AttributeController.updateAttribute);

router.delete( '/', AttributeController.deleteAttribute);

export default router;