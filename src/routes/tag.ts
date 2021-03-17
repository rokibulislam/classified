import express from 'express'
import TagController from '../controller/tag'
const router  = express.Router()

router.get( '/', TagController.getTags);

router.get( '/:id', TagController.getTag);

router.post( '/', TagController.createTag);

router.put( '/', TagController.updateTag);

router.delete( '/', TagController.deleteTag);

export default router;